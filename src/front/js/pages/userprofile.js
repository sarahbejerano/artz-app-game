import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/userProfile.scss";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { RedButton } from "../component/redButton";
import { PageHeader } from "../component/header";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { MoreInfoModal } from "../component/moreInfoModal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'


export const UserProfile = ({ onQuit, ...props }) => {
    const history = useHistory();
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [modalDetailShow, setModalDetailShow] = React.useState(false);

    const favorites = store.favorites;
    // useEffect(() => {
    //     if (store.user === null) {
    //         history.push("/")
    //     }
    // }, [store.user]);

    // const restartScore = () => {
    //     actions.resetScore();
    //     history.push("/")
    // };
    const handleFavoriteButton = () => {
        if (isFavorite) {
            actions.removeFromFavorites(store.question.correctAnswer.id)
        } else {
            actions.addToFavorites(store.question.correctAnswer.id)
        }
    }
    const isFavorite = store.question && store.favorites.includes(store.question.correctAnswer.id);

    return (

        <Container className="inputContainer">
            <MoreInfoModal
                show={modalDetailShow}
                onHide={() => setModalDetailShow(false)}
                {...store.favorites}
            />

            <PageHeader />
            <div className="panelsContainer">
                <div className="leftPanel">
                    <div className="userNameSquare">
                        {store.user && <p className="nameProfile"> USERNAME
                            {store.user.profileName}
                        </p>}
                        <div className="scorePlayer">{store.score}/10
                        </div>
                    </div>
                    <div className="greenSquare"></div>
                </div>
                <div className="rightPanel">
                    <p>FAVORITES</p>
                    <Row xs={1} md={3} className="cardRow">
                        {favorites.map((favorite, idx) => (
                            <Col key={idx}
                                className="cardColumn">
                                <button
                                    className="moreInfoLink" onClick={() => setModalDetailShow(true)} className="cardImage"
                                    src="https://via.placeholder.com/500x350"
                                    alt="First slide"
                                    width="100%"
                                    height="100%"
                                >
                                </button>
                                {/* <button className={`favoriteButton ${isFavorite ? 'remove' : ''}`} onClick={handleFavoriteButton}>
                                    <FontAwesomeIcon
                                        className="fontIcon"
                                        icon={faHeart}
                                    />
                                    <FontAwesomeIcon
                                        className="fontIcon"
                                        icon={faHeartBroken}
                                    />
                                </button> */}
                            </Col>
                        ))}
                    </Row>
                </div>
                {/* <div className="profileFooter">
                    <RedButton
                        text="close"
                        className="closeButton"
                        callback={() => { restartScore() }} />
                    <br />
                    <RedButton
                        text="play"
                        className="playButton"
                        callback={() => { restartScore() }} />
                </div> */}
            </div>

        </Container>


    );
};

UserProfile.propTypes = {
    onQuit: PropTypes.func,
};


