import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { QuestionId } from "../component/questionId";
import { ModalMenu } from "../component/modal"
import { PageButton } from "../component/pageButton";
import { avatars } from "../service/avatars";


export const QuestionPage = () => {
    const history = useHistory();
    const { store, actions } = useContext(Context);
    const [showIncorrect, setShowIncorrect] = useState(false);
    const [incorrectId, setIncorrectId] = useState(null);

    useEffect(() => {
        if (store.score < 10) {
            actions.getQuestion();
        }
        else {
            history.push("/userprofile")
        }

    }, [store.score]);

    const onUserSubmit = (selectedId) => {
        setShowIncorrect(false);
        setIncorrectId(null);
        if (selectedId == store.question.correctAnswer.objectID) {
            actions.increaseScore();
        } else {
            setIncorrectId(selectedId)
        };
    }
    useEffect(() => {
        setShowIncorrect(true)
    }, [showIncorrect]);

    const onQuit = () => {
        actions.resetScore();
        history.push("/");
    }


    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        if (store.user === null) {
            history.push("/")
        }
    }, [store.user]);

    return (

        <div className="questionBody">
            <div className="headerContainer">
                {store.user && <div className="avatarProfile"> {store.user && <img src={avatars[store.user.avatarID]} />}</div>}
                <PageButton
                    text="+Info"
                    variant="primary small"
                    callback={() => setModalShow(true)}

                />

                {store.question && <ModalMenu
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    {...store.question.correctAnswer}
                />}

            </div>
            {store.question && (
                <QuestionId
                    questionPrompt={store.question.questionPrompt}
                    answers={store.question.answers}
                    correctAnswer={store.question.correctAnswer}
                    onUserSubmit={onUserSubmit}
                    onQuit={onQuit}
                    showIncorrect={showIncorrect}
                    incorrectId={incorrectId}
                />
            )}
        </div>
    );
};