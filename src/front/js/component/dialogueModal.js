import React from "react";
import { Modal, } from "react-bootstrap";
import PropTypes from "prop-types";
import { PageButton } from "../component/pageButton";
import "../../styles/modalDialogue.scss";


export const DialogueModal = ({ onQuit, ...props }) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modalDialogueContainer"
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className="textModalContainer">
                    Are you sure you
                    want to sleep
                    at the museum
                    tonight?
                </div>
            </Modal.Body>

            <Modal.Footer>
                <PageButton
                    text="Back"
                    variant="primary small"
                    callback={props.onHide}
                />
                <PageButton text="Yes, I'm sure" variant="secondary small"
                    callback={() => { onQuit() }}
                    className="yesImSure"
                />

            </Modal.Footer>

        </Modal >
    );
}
DialogueModal.propTypes = {
    onQuit: PropTypes.func,


};