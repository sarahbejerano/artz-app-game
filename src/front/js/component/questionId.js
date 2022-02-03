import React, { useState } from "react";
import { PageButton } from "../component/pageButton";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../styles/question.scss";
import { ProgressBar } from "../component/progressBar";
import { DialogueModal } from '../component/dialogueModal'

export const QuestionId = ({
    questionPrompt,
    answers,
    correctAnswer,
    onUserSubmit,
    onQuit,
    showIncorrect,
    incorrectId,
}) => {
    const [selectedId, setSelectedId] = useState("");
    const onRadioChanged = (e) => {
        setSelectedId(e.target.value)
    }
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Card className="cardQuestion">
            <div className="imageContainer">
                <Card.Img
                    className="imageQuestion"
                    variant="top"
                    src={correctAnswer.image}
                />
            </div>

            <div className="cardBody">
                <Card.Body className="questionBody">
                    {questionPrompt}
                </Card.Body>

                <div className="answersBody">
                    {answers.map(function (answer, index) {
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
                <ProgressBar className="proBar" />
                <Card.Footer className="footer">
                    <PageButton text="quit" variant="secondary small"
                        callback={() => { setModalShow(true) }}
                    />
                    <DialogueModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        onQuit={onQuit}
                    />

                    <PageButton text="next" variant="primary small" callback={() => { onUserSubmit(selectedId) }} />
                </Card.Footer>
            </div>
        </Card>
    );
};




QuestionId.propTypes = {
    questionPrompt: PropTypes.string,
    answers: PropTypes.array,
    correctAnswer: PropTypes.object,
    onUserSubmit: PropTypes.func,
    onQuit: PropTypes.func,
    showIncorrect: PropTypes.bool,
    incorrectId: PropTypes.string,

};