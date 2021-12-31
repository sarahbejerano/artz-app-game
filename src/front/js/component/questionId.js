import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { PageButton } from "../component/pageButton";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../styles/questionId.scss";
import { ProgressBar } from "../component/progressBar";


export const QuestionId = ({ imageQuestion, questionCard,
    answerOne, answerTwo, answerThree }) => {
    const { store, actions } = useContext(Context);

    return (
        <Card className="cardQuestion">
            <div className="imageContainer">
                <Card.Img
                    className="imageQuestion"
                    variant="top"
                    src="https://images.metmuseum.org/CRDImages/ad/mobile-large/DP-21446-001.jpg"
                />
            </div>

            <div className="cardBody">
                <Card.Body className="questionBody">
                    Who is the artist?
                </Card.Body>

                <Card.Text className="answersBody">

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1">
                            Winslow Homer
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Edward Hopper
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked />
                        <label className="form-check-label" for="flexRadioDefault3">
                            Joaquín Sorolla
                        </label>
                    </div>

                </Card.Text>
                {/* <Card.Title className="cardTitle">1/10 QUESTION</Card.Title> */}
                <ProgressBar className="proBar" />
                <Card.Footer className="footer">
                    <PageButton text="next" variant="primary" callback={() => { console.log("text") }} />
                </Card.Footer>
            </div>
        </Card>
    );
};




QuestionId.propTypes = {
    imageQuestion: PropTypes.string,
    questionCard: PropTypes.string,
    answerOne: PropTypes.string,
    answerTwo: PropTypes.string,
    answerThree: PropTypes.string,
};