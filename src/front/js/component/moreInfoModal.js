
import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { IconButton } from "../component/iconButton";
import "../../styles/moreInfoModal.scss";
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'


export const MoreInfoModal = ({ image, altText, title, id, artist_title, date_end, style_title, place_of_origin, ...props }) => {
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
            className="moreInfoModal" >
            <Modal.Header>
                <p className="artTitle">"{title}"<br />  {artist_title} </p>
                <Button
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
                </Button>
                <IconButton
                    icon={faTimes}
                    callback={props.onHide}
                />
            </Modal.Header>

            <Modal.Body>
                <div className="imageModalContainer">
                    <img src={image} alt={altText} />
                </div>
                <div className="countryDateMovement">{place_of_origin}, {date_end} <br />
                    {style_title}
                </div>

            </Modal.Body>


            <Modal.Footer className="modalFooter">

                <p className="courtesyText"> Courtesy of Art Institute of Chicago API </p>
            </Modal.Footer>
        </Modal >
    );
}

MoreInfoModal.propTypes = {
    imageUrl: PropTypes.string,
    altText: PropTypes.string,
    title: PropTypes.string,
    artist_title: PropTypes.string,
    date_end: PropTypes.number,
    style_title: PropTypes.string,
    place_of_origin: PropTypes.string,
};