import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { PageButton } from "../component/pageButton";
import "../../styles/modalMenu.scss";


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

                <div className="imageModalContainer"><img src={imageUrl} alt={altText} /></div>

            </Modal.Body>

            <Modal.Footer>
                <PageButton
                    text="Close"
                    variant="primary small"
                    callback={props.onHide}
                />

            </Modal.Footer>
            <h7> Courtesy of Art Institute of Chicago API </h7>
        </Modal >
    );
}

ModalMenu.propTypes = {
    imageUrl: PropTypes.string,
    altText: PropTypes.string,
};