import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { QuestionId } from "../component/questionId";


export const QuestionPage = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getQuestion();
    }, []);
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