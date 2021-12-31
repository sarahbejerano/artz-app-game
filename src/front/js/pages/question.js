import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { QuestionId } from "../component/questionId";


export const QuestionPage = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getQuestion();
    }, []);
    return (
        <div className="questionBody">
            {store.question && (
                <QuestionId
                    imageQuestion={store.question.correctAnswer.primaryImageSmall}
                    questionPrompt={store.question.questionPrompt}
                    answerOne={store.question.answers[0].artistDisplayName}
                    answerTwo={store.question.answers[1].artistDisplayName}
                    answerThree={store.question.answers[2].artistDisplayName}
                />
            )}
        </div>
    );
};