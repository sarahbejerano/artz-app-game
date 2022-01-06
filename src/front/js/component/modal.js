import React from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { PageButton } from "../component/pageButton";
import "../../styles/modalMenu.scss";


export const ModalMenu = ({ image, title, artist_title, date_end, style_title, place_of_origin, ...props }) => {
    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modalInfoContainer"
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3> {title}</h3>
                    <h4> {artist_title}</h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className="imageModalContainer"><img src={image} /></div>
                <h4>
                    {place_of_origin}, {date_end} <br />
                    {style_title} <br />
                </h4>
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
    image: PropTypes.string,
    title: PropTypes.string,
    artist_title: PropTypes.string,
    date_end: PropTypes.number,
    style_title: PropTypes.string,
    place_of_origin: PropTypes.string,

};