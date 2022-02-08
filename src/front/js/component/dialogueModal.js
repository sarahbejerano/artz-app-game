import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { RedButton } from "../component/redButton";
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
            <Modal.Body>
                <div className="areYouSureText">
                    Are you sure?
                </div>
                <RedButton
                    text="No, I want to keep learning"
                    callback={props.onHide}
                    className="no"
                    size="small"
                />
                <RedButton text="Yes, I'm sure" variant="secondary small"
                    callback={() => { onQuit() }}
                    className="yesImSure"
                    size="small"
                />
            </Modal.Body>
        </Modal >
    );
}
DialogueModal.propTypes = {
    onQuit: PropTypes.func,


};