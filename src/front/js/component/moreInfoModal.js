
import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { IconButton } from "../component/iconButton";
import "../../styles/moreInfoModal.scss";
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'


export const MoreInfoModal = ({ imageUrl, altText, title, id, artist_title, date_end, style_title, place_of_origin, ...props }) => {
    const { store, actions } = useContext(Context);
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
                {!isFavorite ?
                    <IconButton
                        icon={faHeart}
                        onClick={handleFavoriteButton}
                        className="favoriteButton addToFavorite"
                    /> :
                    <IconButton
                        icon={faHeartBroken}
                        onClick={handleFavoriteButton}
                        className="favoriteButton removeFromFavorite"
                    />
                }
                <IconButton
                    icon={faTimes}
                    onClick={props.onHide}
                />
            </Modal.Header>

            <Modal.Body>
                <div className="imageModalContainer">
                    <img src={imageUrl} alt={altText} />
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