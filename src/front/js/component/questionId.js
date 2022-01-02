import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { PageButton } from "../component/pageButton";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../styles/questionId.scss";
import { ProgressBar } from "../component/progressBar";


export const QuestionId = ({ imageQuestion, questionPrompt,
    answerOne, answerTwo, answerThree }) => {
    const { store, actions } = useContext(Context);

    return (
        <Card className="cardQuestion">
            <div className="imageContainer">
                <Card.Img
                    className="imageQuestion"
                    variant="top"
                    src={imageQuestion}
                />
            </div>

            <div className="cardBody">
                <Card.Body className="questionBody">
                    {questionPrompt}
                </Card.Body>

                <div className="answersBody">

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            {answerOne}
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            {answerTwo}
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked />
                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                            {answerThree}
                        </label>
                    </div>
                </div>
                {/* <Card.Title className="cardTitle">1/10 QUESTION</Card.Title> */}
                <ProgressBar className="proBar" />
                <Card.Footer className="footer">
                    <PageButton text="next" variant="primary small" callback={() => { console.log("text") }} />
                </Card.Footer>
            </div>
        </Card>
    );
};




QuestionId.propTypes = {
    imageQuestion: PropTypes.string,
    questionPrompt: PropTypes.string,
    answerOne: PropTypes.string,
    answerTwo: PropTypes.string,
    answerThree: PropTypes.string,
};