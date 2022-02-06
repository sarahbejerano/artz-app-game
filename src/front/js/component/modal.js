
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { IconButton } from "../component/iconButton";
import "../../styles/modalMenu.scss";
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'


export const ModalMenu = ({ imageUrl, altText, id, ...props }) => {
    const history = useHistory();
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [modalDetailShow, setModalDetailShow] = React.useState(false);
    const favorites = store.favorites;
    const handleFavoriteButton = () => {
        if (isFavorite) {
            actions.removeFromFavorites(id)
        } else {
            actions.addToFavorites(id)
        }
    }
    const isFavorite = favorites.includes(id);
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

                <button
                    className={`favoriteButton ${isFavorite ? 'remove' : ''}`}
                    onClick={handleFavoriteButton}>
                    {isFavorite ? <IconButton
                        icon={faHeart}
                        onClick={handleFavoriteButton}
                        className="addToFavorite" /> :
                        <IconButton
                            icon={faHeartBroken}
                            className="removeFromFavorite"
                        />}
                </button>
                <IconButton
                    icon={faTimes}
                    callback={props.onHide}
                />
                <p
                    className="courtesyText">
                    Courtesy of Art Institute of Chicago API
                </p>

            </Modal.Footer>
        </Modal >
    );
}

ModalMenu.propTypes = {
    imageUrl: PropTypes.string,
    altText: PropTypes.string,
};