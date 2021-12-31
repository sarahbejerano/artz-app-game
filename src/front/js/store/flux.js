import { QuestionId } from "../component/questionId";

const randomNumber = (limit) => Math.floor(Math.random() * limit);

const getState = ({ getStore, getActions, setStore }) => {
	return {
		// returning un objeto que tiene dentro propiedades: store and action, que a su vez tienen objetos dentro. Action tiene funciones como objetos dentro
		store: {
			score: 0,
			question: null,
		},
		actions: {
			// Use getActions to call a function within a fuction
			getQuestion: () => {
				// fetching data from the backend
				fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?q=&hasImages=true&departmentId=11")
					.then(resp => resp.json())
					.then(data => {
						const answerOne = data.objectIDs[randomNumber(data.objectIDs.length)];
						const answerTwo = data.objectIDs[randomNumber(data.objectIDs.length)];
						const answerThree = data.objectIDs[randomNumber(data.objectIDs.length)];

						return Promise.all([
							fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + answerOne),
							fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + answerTwo),
							fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + answerThree),
						]);


					})
					.then(fetchResults => {
						return Promise.all([
							fetchResults[0].json(),
							fetchResults[1].json(),
							fetchResults[2].json(),
						]);
					})
					.then(answers => {
						const correctAnswer = answers[randomNumber(answers.length)];
						console.log(answers)
						setStore({
							question: {
								answers: answers,
								correctAnswer: correctAnswer,
								questionPrompt: "Who is the author?"
							}
						});

					})
					.catch(error => console.log("Error loading message from backend", error))
			},

			answerQuestion: ({ id }) => {
				const { favorites } = getStore();
				const { [id]: remove, ...newFavorites } = favorites;
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;



















// const getState = ({ getStore, getActions, setStore }) => {
// 	return {
// 		store: {
// 			message: null,
// 			demo: [
// 				{
// 					title: "FIRST",
// 					background: "white",
// 					initial: "white"
// 				},
// 				{
// 					title: "SECOND",
// 					background: "white",
// 					initial: "white"
// 				}
// 			]
// 		},
// 		actions: {
// 			// Use getActions to call a function within a fuction
// 			exampleFunction: () => {
// 				getActions().changeColor(0, "green");
// 			},

// 			},
// 			changeColor: (index, color) => {
// 				//get the store
// 				const store = getStore();

// 				//we have to loop the entire demo array to look for the respective index
// 				//and change its color
// 				const demo = store.demo.map((elm, i) => {
// 					if (i === index) elm.background = color;
// 					return elm;
// 				});

// 				//reset the global store
// 				setStore({ demo: demo });
// 			}
// 		}
// 	};
// };

// export default getState;
