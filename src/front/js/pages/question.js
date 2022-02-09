import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { MoreInfoModal } from "../component/moreInfoModal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { DialogueModal } from '../component/dialogueModal'
import "../../styles/question.scss";


const NewLineText = ({ text }) => {
    return text.split('\n').map((str, key) => <p key={key}>{str}</p>);
}

export const QuestionPage = () => {
    const history = useHistory();
    const { store, actions } = useContext(Context);
    const [showIncorrect, setShowIncorrect] = useState(false);
    const [incorrectId, setIncorrectId] = useState(null);
    const [selectedId, setSelectedId] = useState("");
    const [loading, setLoading] = useState(true);
    const [modalShow, setModalShow] = React.useState(false);
    const [modalDetailShow, setModalDetailShow] = React.useState(false);

    useEffect(() => {
        if (store.score === 10) {
            actions.resetScore();
        } else {
            actions.getQuestion();
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        if (!loading) {
            if (store.score < 10) {
                setSelectedId("");
                actions.getQuestion();
            }
            else {
                history.push("/profile")
            }
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
            actions.setRedirect("/game");
            history.push("/login")
        }
    }, [store.user]);

    const isFavorite = store.question && store.favorites.includes(store.question.correctAnswer.id);
    if (store.question) console.log(store.question.correctAnswer)
    return (
        <>
            {store.question &&
                (
                    <>
                        <DialogueModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            onQuit={onQuit}
                        />
                        <MoreInfoModal
                            show={modalDetailShow}
                            onHide={() => setModalDetailShow(false)}
                            {...store.question.correctAnswer}
                            imageUrl={store.question.correctAnswer.image}
                        />

                        <div className="questionPageContainer">
                            <div className="imageAndProcessCounter">
                                <h2>{`${store.score}/10 question`}</h2>
                                <div className="imageContainer">
                                    <img
                                        src={store.question.correctAnswer.image}
                                        className={store.question.correctAnswer.thumbnail.width > store.question.correctAnswer.thumbnail.height ? "landscape" : "portrait"}
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

                            <button className="quitButton" onClick={() => setModalShow(true)}
                            >quit?
                            </button>

                            <button className={`favoriteButton ${isFavorite ? 'remove' : ''}`} onClick={handleFavoriteButton}>
                                <span className="desktopFav">
                                    <NewLineText text={isFavorite ? "Remove \n from \n favorites" : "Add \n To \n Favorites"} />
                                </span>
                                <span className="mobileFav">{isFavorite ? "- Fav" : "+ fav"}</span>
                            </button>
                            <button className="moreInfoLink" onClick={() => setModalDetailShow(true)}>
                                <p className="moreInfo"> more info?</p>
                                <p className="dontBeAfraid">(don't be afraid to ask)</p>
                            </button>
                            <button className="nextButton" onClick={() => onUserSubmit(selectedId)}>
                                Next
                                <FontAwesomeIcon
                                    className="fontIcon"
                                    icon={faChevronRight}
                                />
                            </button>
                        </div>
                    </>
                )
            }
        </>
    )


};