// import React, { useState, useEffect, useContext } from "react";
// import { Context } from "../store/appContext";
// import { PageButton } from "../component/pageButton";
// import { Card } from "react-bootstrap";
// import PropTypes from "prop-types";
// import "../../styles/question.scss";

// export const Question = ({ imageQuestion, questionCard,
//     answerOne, answerTwo, answerThree }) => {
//     const { store, actions } = useContext(Context);

//     return (
//         <Card className="cardQuestion">
//             {/* 1/10 se tiene que trabajar para que sea secuencial */}
//             <Card.Title>1/10 QUESTION</Card.Title>
//             <Card.Img
//                 className="imageQuestion"
//                 variant="top"
//                 src={imageQuestion}
//                 style={{ position: "center", padding: "20px" }}
//             />
//             <Card.Body className="questionBody">
//                 <Card.Text>{questionCard}</Card.Text>

//                 <div className="footerCard">
//                     <PageButton text="back" callback={() => { console.log("text") }} />
//                     <PageButton text="next" callback={() => { console.log("text") }} />


//                     {/* lo ques estoy diciendo es al boton que me dirija a la ruta /detail + el id de la obra(en este caso) */}
//                     {/* <Button href={`detail/${id}`} variant="danger">
//                         More Details
//                     </Button> */}
//                 </div>
//             </Card.Body>
//         </Card>
//     );
// };


// // aqui se definen  los propTypes que voy a necesitar para la pregunta

// Question.propTypes = {
//     imageQuestion: PropTypes.string,
//     questionCard: PropTypes.string,
//     answerOne: PropTypes.string,
//     answerTwo: PropTypes.string,
//     answerThree: PropTypes.string,
// };