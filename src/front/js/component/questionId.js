import React, { useState, useEffect, useContext } from "react";
import { PageButton } from "../component/pageButton";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../styles/questionId.scss";
import { ProgressBar } from "../component/progressBar";


export const QuestionId = ({
    questionPrompt,
    answers,
    correctAnswer,
    onUserSubmit,
}) => {
    const [selectedId, setSelectedId] = useState("");
    const onRadioChanged = (e) => {
        setSelectedId(e.target.value)
    }
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
                            <label className="form-check-label" htmlFor={"flexRadioDefault" + index}>
                                {answer.title}
                            </label>
                        </div>;
                    })}

                </div>
                <ProgressBar className="proBar" />
                <Card.Footer className="footer">
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

};