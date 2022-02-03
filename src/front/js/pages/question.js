import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/question.scss";
import { ModalMenu } from "../component/modal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Card, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { ProgressBar } from "../component/progressBar";
import { DialogueModal } from '../component/dialogueModal'

const NewLineText = ({ text }) => {
    return text.split('\n').map(str => <p>{str}</p>);
}

export const QuestionPage = () => {
    const history = useHistory();
    const { store, actions } = useContext(Context);
    const [showIncorrect, setShowIncorrect] = useState(false);
    const [incorrectId, setIncorrectId] = useState(null);
    const [selectedId, setSelectedId] = useState("");
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        if (store.score < 10) {
            actions.getQuestion();
        }
        else {
            history.push("/userprofile")
        }

    }, [store.score]);

    const onRadioChanged = (e) => {
        setSelectedId(e.target.value)
    }

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

    const handleFavoriteButton = () => {
        if (isFavorite) {
            actions.removeFromFavorites(store.question.correctAnswer.id)
        } else {
            actions.addToFavorites(store.question.correctAnswer.id)
        }
    }

    useEffect(() => {
        if (store.user === null) {
            history.push("/")
        }
    }, [store.user]);

    const isFavorite = store.question && store.favorites.includes(store.question.correctAnswer.id);

    return (
        <>
            {store.question &&
                (
                    <>
                        <ModalMenu
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            {...store.question.correctAnswer}
                        />
                        <div className="questionPageContainer">
                            <div className="imageAndProcessCounter">
                                <h2>{`${store.score}/10 question`}</h2>
                                <div className="imageContainer">
                                    <img
                                        src={store.question.correctAnswer.image}
                                    />
                                </div>
                            </div>
                            <div className="questionIndeed">
                                <NewLineText text={store.question.questionPrompt} />
                            </div>
                            <div className="answers">

                                {store.question.answers.map(function (answer, index) {
                                    return <div key={index}
                                        className="form-check">
                                        <input
                                            className="form-check-input" type="radio" name="flexRadioDefault"
                                            id={"flexRadioDefault" + index}
                                            value={answer.objectID}
                                            onChange={onRadioChanged}
                                            checked={selectedId == answer.objectID} />
                                        <label className={`form-check-label ${(showIncorrect && incorrectId == answer.objectID) ? "incorrect" : ""}`} htmlFor={"flexRadioDefault" + index}>
                                            {answer.title}
                                        </label>
                                    </div>;
                                })}


                            </div>

                            <div className="quitButton">quit?</div>
                            <button className={`favoriteButton ${isFavorite ? 'remove' : ''}`} onClick={handleFavoriteButton}>
                                <NewLineText text={isFavorite ? "Remove \n from \n favorites" : "Add \n To \n Favorites"} />
                            </button>
                            <div className="moreInfoLink"> <p>more info ?</p><p className="dontBeAfraid">(don't be afraid to ask)</p></div>
                            <button className="nextButton" onClick={() => onUserSubmit(selectedId)}>
                                Next
                                <FontAwesomeIcon
                                    className="fontIcon"
                                    icon={faChevronRight}
                                />
                            </button>



                            {/* <PageButton
                className="moreInfoButton"
                text="+Info"
                // variant="primary small"
                callback={() => setModalShow(true)}

            /> */}







                        </div>
                    </>
                )
            }
        </>
    )


};