import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PageHeader } from "../component/header";
import { Container, Row, Col } from "react-bootstrap";
import { MoreInfoModal } from "../component/moreInfoModal"
import "../../styles/userProfile.scss";


export const UserProfile = () => {
    const history = useHistory();
    const { store, actions } = useContext(Context);
    const [modalDetailShow, setModalDetailShow] = useState(false);
    const [favoriteInModal, setFavoriteInModal] = useState(null);

    const favoriteIds = store.favorites;
    const favorites = store.artworks.favorites;

    useEffect(() => {
        if (store.user === null) {
            actions.setRedirect("/profile");
            history.push("/login")
        }
    }, [store.user]);

    useEffect(() => {
        actions.getUserFavorites();
    }, [favoriteIds]);

    const showModalFor = (favoriteIndex) => {
        setFavoriteInModal(favoriteIndex);
        setModalDetailShow(true);
    }

    return (
        <Container className="inputContainer">
            {favorites &&
                <MoreInfoModal
                    show={favoriteInModal !== null && favorites[favoriteInModal] && modalDetailShow}
                    onHide={() => setModalDetailShow(false)}
                    {...favorites[favoriteInModal]}
                />
            }
            <PageHeader />
            <div className="panelsContainer">
                <div className="leftPanel">
                    <div className="userNameSquare">
                        {store.user && <p className="nameProfile">
                            {store.user.profileName}
                        </p>}
                        <div className="scorePlayer">{store.score}/10
                        </div>
                    </div>
                    <div className="greenSquare"></div>
                </div>
                <div className="rightPanel">
                    <h2 className="favoritesTitle" >FAVORITES</h2>
                    <Row xs={1} md={3} className="cardRow">
                        {favorites && favorites.map((favorite, idx) => (
                            <Col key={idx}
                                className="cardColumn">
                                <button
                                    className="moreInfoLink"
                                    onClick={() => showModalFor(idx)}
                                    className="cardImage"
                                >
                                    <img
                                        src={favorite.imageUrl}
                                        alt={favorite.title}
                                        className={favorite.thumbnail.width > favorite.thumbnail.height ? "landscape" : "portrait"}
                                    />
                                </button>

                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </Container>


    );
};




