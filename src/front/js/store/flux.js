
import { getAuthorQuestion, getPeriodQuestion, getTitleQuestion, getArtMovementQuestion } from '../service/questionGenerator';

const randomNumber = (limit) => Math.floor(Math.random() * limit);
const questionsGenerators = [getAuthorQuestion, getPeriodQuestion, getTitleQuestion, getArtMovementQuestion];

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			score: 0,
			question: null,
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
			}
		}
	};
};

export default getState;
