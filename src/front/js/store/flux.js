
import { getAuthorQuestion, getPeriodQuestion, getTitleQuestion, getArtMovementQuestion, } from '../service/questionGenerator';
import { getArtworks } from '../service/cardContentGenerator'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, getFirestore, getDoc } from "firebase/firestore";

const randomNumber = (limit) => Math.floor(Math.random() * limit);
const questionsGenerators = [getAuthorQuestion, getPeriodQuestion, getTitleQuestion, getArtMovementQuestion];

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			score: 0,
			question: null,
			user: null,
			artworks: {},
		},
		actions: {
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
			increaseScore: () => {
				const { score } = getStore();
				setStore({ score: score + 1 });
			},
			resetScore: () => {
				setStore({ score: 0 });
			},
			createUserProfile: (email, password, profileName, avatarID) => {
				const { saveUserToLocalStore } = getActions();
				const auth = getAuth();
				createUserWithEmailAndPassword(auth, email, password)
					.then((userCredential) => {
						const db = getFirestore();
						const user = userCredential.user;
						console.log(user);
						return setDoc(doc(db, "profiles", user.uid), {
							profileName: profileName,
							avatarID: avatarID,
						});
					})
					.then(() => {
						setStore({
							user: {
								profileName: profileName,
								avatarID: avatarID,
							}
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
						setStore({ user: snapshot.data() });
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
						localStorage.removeItem('avatarID');
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
					const profileName = localStorage.getItem('profileName');
					const avatarID = localStorage.getItem('avatarID');
					if (profileName && avatarID) {
						setStore({
							user: {
								profileName: profileName,
								avatarID: avatarID,
							}
						})
					}
				}
			},
			saveUserToLocalStore: () => {
				const { user } = getStore();
				if (user) {
					localStorage.setItem('profileName', user.profileName);
					localStorage.setItem('avatarID', user.avatarID);
				}
			}
		}
	};
};

export default getState;
