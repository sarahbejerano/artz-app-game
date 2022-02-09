import { getAuthorQuestion, getPeriodQuestion, getTitleQuestion, getArtMovementQuestion, } from '../service/questionGenerator';
import { getArtworks } from '../service/cardContentGenerator'
import { getFavorites } from '../service/favoritesGenerator';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, getFirestore, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { ArtPeriods } from "../service/collectionGenerator";

const randomNumber = (limit) => Math.floor(Math.random() * limit);
const questionsGenerators = [getAuthorQuestion, getPeriodQuestion, getTitleQuestion, getArtMovementQuestion];

export const getPersistedState = () => {
	const profileName = localStorage.getItem('profileName');
	const favorites = localStorage.getItem('favorites');
	const score = localStorage.getItem('score');
	return profileName && favorites && score ?
		{
			user: {
				profileName: profileName,
			},
			favorites: JSON.parse(favorites),
			score: parseInt(score, 10),
		} :
		{
			user: null,
			favorites: [],
			score: 0,
		};
};

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			question: null,
			artworks: {},
			redirect: null,
			...getPersistedState(),
		},
		actions: {
			setRedirect: (path) => {
				setStore({ redirect: path });
			},
			getQuestion: () => {
				questionsGenerators[randomNumber(questionsGenerators.length)](setStore);
			},
			getArtworksForPeriod: (query, period) => {
				getArtworks(query)
					.then((newArtworks) => {
						const { artworks } = getStore();
						setStore({
							artworks: {
								...artworks,
								[period]: newArtworks,
							}
						});
					});
			},
			getAllPeriods: () => {
				const { artworks } = getStore();
				Promise.all(
					ArtPeriods
						.filter(artPeriod => !artworks[artPeriod.title])
						.map(artPeriod => {
							return getArtworks(artPeriod.artworksQuery).then((newArtworks) => {
								return {
									[artPeriod.title]: newArtworks,
								}
							});
						})
				).then(results => {
					const artworksByPeriod = results.reduce((periods, period) => {
						return { ...periods, ...period };
					}, {});
					setStore({
						artworks: {
							...artworks,
							...artworksByPeriod,
						}
					});
				});
			},
			getUserFavorites: () => {
				const { favorites } = getStore();
				if (favorites.length > 0) {
					getFavorites(favorites)
						.then((newFavorites) => {
							const { artworks } = getStore();
							setStore({
								artworks: {
									...artworks,
									favorites: newFavorites,
								}
							});
						})
				}
			},
			addToFavorites: (id) => {
				const { favorites, user: profile } = getStore();
				const { saveUserToLocalStore } = getActions();
				const auth = getAuth();
				const unsuscribe = auth.onAuthStateChanged(function (user) {
					if (user && profile) {
						const db = getFirestore();
						const profileDoc = doc(db, "profiles", user.uid);
						updateDoc(profileDoc, {
							favorites: arrayUnion(id),
						}).then(() => {
							setStore({ favorites: [...favorites, id] });
							saveUserToLocalStore();
						}).catch(err => {
							console.log(err);
						})
					}
					unsuscribe();
				});
			},
			removeFromFavorites: (id) => {
				const { favorites, user: profile } = getStore();
				const { saveUserToLocalStore } = getActions();
				const auth = getAuth();
				const unsuscribe = auth.onAuthStateChanged(function (user) {
					if (user && profile) {
						const db = getFirestore();
						const profileDoc = doc(db, "profiles", user.uid);
						updateDoc(profileDoc, {
							favorites: arrayRemove(id),
						}).then(() => {
							const newFavorites = favorites.filter(favorite => favorite !== id);
							setStore({ favorites: newFavorites });
							saveUserToLocalStore();
						}).catch(err => {
							console.log(err);
						})
					}
					unsuscribe();
				});
			},
			increaseScore: () => {
				const { score, user: profile } = getStore();
				const { saveUserToLocalStore } = getActions();
				const auth = getAuth();
				const unsuscribe = auth.onAuthStateChanged(function (user) {
					if (user && profile) {
						const db = getFirestore();
						const profileDoc = doc(db, "profiles", user.uid);
						updateDoc(profileDoc, {
							score: score + 1,
						}).then(() => {
							setStore({ score: score + 1 });
							saveUserToLocalStore();
						}).catch(err => {
							console.log(err);
						})
					}
					unsuscribe();
				});
			},
			resetScore: () => {
				const { user: profile } = getStore();
				const { saveUserToLocalStore } = getActions();
				const auth = getAuth();
				const unsuscribe = auth.onAuthStateChanged(function (user) {
					if (user && profile) {
						const db = getFirestore();
						const profileDoc = doc(db, "profiles", user.uid);
						updateDoc(profileDoc, {
							score: 0,
						}).then(() => {
							setStore({ score: 0 });
							saveUserToLocalStore();
						}).catch(err => {
							console.log(err);
						})
					}
					unsuscribe();
				});
			},
			createUserProfile: (email, password, profileName) => {
				const { saveUserToLocalStore } = getActions();
				const auth = getAuth();
				createUserWithEmailAndPassword(auth, email, password)
					.then((userCredential) => {
						const db = getFirestore();
						const user = userCredential.user;
						return setDoc(doc(db, "profiles", user.uid), {
							profileName: profileName,
						});
					})
					.then(() => {
						setStore({
							user: {
								profileName: profileName,
							},
							favorites: [],
						});
						saveUserToLocalStore();
					})
					.catch((error) => {
						console.log(error);
						const errorCode = error.code;
						const errorMessage = error.message;

					});
			},

			signInProfile: (email, password) => {
				const { saveUserToLocalStore } = getActions();
				const auth = getAuth();
				signInWithEmailAndPassword(auth, email, password)
					.then((userCredential) => {
						const user = userCredential.user;
						const db = getFirestore();
						return getDoc(doc(db, "profiles", user.uid));
					})
					.then(snapshot => {
						const profile = snapshot.data();
						setStore({
							user: { profileName: profile.profileName },
							favorites: profile.favorites,
						});
						saveUserToLocalStore();
					})
					.catch((error) => {
						console.log(error);
						const errorCode = error.code;
						const errorMessage = error.message;
					});

			},
			signOut: () => {
				const auth = getAuth();
				signOut(auth)
					.then(() => {
						setStore({ user: null });
						localStorage.removeItem('profileName');
					})
					.catch((error) => {
						console.log(error);
						const errorCode = error.code;
						const errorMessage = error.message;
					});

			},
			loadUserFromLocalStore: () => {
				const { user } = getStore();
				if (!user) {
					setStore(getPersistedState());
				}
			},
			saveUserToLocalStore: () => {
				const { user, favorites, score } = getStore();

				if (user && favorites) {
					localStorage.setItem('profileName', user.profileName);
					localStorage.setItem('favorites', JSON.stringify(favorites));
					localStorage.setItem('score', score);
				}
			}
		}
	};
};

export default getState;
