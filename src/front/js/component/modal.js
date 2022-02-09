
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { IconButton } from "../component/iconButton";
import "../../styles/modalMenu.scss";
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export const ModalMenu = ({ imageUrl, altText, id, ...props }) => {
    const history = useHistory();
    const { store, actions } = useContext(Context);
    const favorites = store.favorites;
    console.log(favorites)
    const handleFavoriteButton = () => {
        console.log(store.user)
        if (store.user) {
            if (isFavorite) {
                actions.removeFromFavorites(id)
            } else {
                actions.addToFavorites(id)
            }
        } else {
            history.push('/login');
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