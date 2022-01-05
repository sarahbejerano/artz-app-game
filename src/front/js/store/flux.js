
import { getAuthorQuestion, getPeriodQuestion, getTitleQuestion, getArtMovementQuestion } from '../service/questionGenerator';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";

const randomNumber = (limit) => Math.floor(Math.random() * limit);
const questionsGenerators = [getAuthorQuestion, getPeriodQuestion, getTitleQuestion, getArtMovementQuestion];

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			score: 0,
			question: null,
			user: null,
		},
		actions: {
			getQuestion: () => {
				questionsGenerators[randomNumber(questionsGenerators.length)](setStore);
			},

			answerQuestion: ({ id }) => {
				const { favorites } = getStore();
				const { [id]: remove, ...newFavorites } = favorites;
				setStore({ favorites: newFavorites });
			},
			increaseScore: () => {
				const { score } = getStore();
				setStore({ score: score + 1 });
			},
			createUserProfile: (email, password, profileName, avatarID) => {
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
					.then((profile) => {
						setStore({ user: profile });
					})
					.catch((error) => {
						console.log(error);
						const errorCode = error.code;
						const errorMessage = error.message;

					});
			},

			signInProfile: (email, password) => {
				const auth = getAuth();
				signInWithEmailAndPassword(auth, email, password)
					.then((userCredential) => {
						console.log("usuario");
						const user = userCredential.user;
						setStore({ user: user });
					})
					.catch((error) => {
						const errorCode = error.code;
						const errorMessage = error.message;
					});

			}
		}
	};
};

export default getState;
