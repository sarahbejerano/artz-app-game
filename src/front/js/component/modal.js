import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { IconButton } from "../component/iconButton";
import "../../styles/modalMenu.scss";
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export const ModalMenu = ({ imageUrl, altText, ...props }) => {
    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modalInfoContainer"
        >
            <Modal.Body>
                <div className="imageModalContainer">
                    <img src={imageUrl} alt={altText} /></div>
            </Modal.Body>
            <Modal.Footer className="modalFooter">

                <IconButton
                    icon={faTimes}
                    text="CLOSE"
                    callback={props.onHide}
                />
                <p className="courtesyText"> Courtesy of Art Institute of Chicago API </p>

            </Modal.Footer>
        </Modal >
    );
}

ModalMenu.propTypes = {
    imageUrl: PropTypes.string,
    altText: PropTypes.string,
};