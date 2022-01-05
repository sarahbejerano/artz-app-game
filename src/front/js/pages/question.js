import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { QuestionId } from "../component/questionId";


export const QuestionPage = () => {
    const history = useHistory();
    const { store, actions } = useContext(Context);
    useEffect(() => {
        if (store.score < 10) {
            actions.getQuestion();
        }
        else {
            history.push("/userprofile")
        }

    }, [store.score]);

    const onUserSubmit = (selectedId) => {
        if (selectedId == store.question.correctAnswer.objectID) {
            actions.getQuestion();
            actions.increaseScore();
        }
    }
    return (
        <div className="questionBody">
            {store.question && (
                <QuestionId
                    questionPrompt={store.question.questionPrompt}
                    answers={store.question.answers}
                    correctAnswer={store.question.correctAnswer}
                    onUserSubmit={onUserSubmit}
                />
            )}
        </div>
    );
};