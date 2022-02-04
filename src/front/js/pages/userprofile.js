import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/userProfile.scss";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { RedButton } from "../component/redButton";
import { PageHeader } from "../component/header";
import { Container, Row, Col, Carousel } from "react-bootstrap";


export const UserProfile = ({ onQuit, ...props }) => {
    const history = useHistory();
    const { store, actions } = useContext(Context);
    const params = useParams();

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

    return (


        <Container className="inputContainer">
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
                    <Row xs={1} md={4} className="cardRow">
                        {favorites.map((favorite, idx) => (
                            <Col key={idx} className="cardColumn">
                                <img
                                    className="carouselImage"
                                    src="https://via.placeholder.com/500x350"
                                    alt="First slide"
                                    width="100%"
                                    height="100%"
                                />
                            </Col>
                        ))}
                    </Row>
                    {/* <Carousel className="favoriteCarousel">
                        {favorites.map(favorite => (
                            <Carousel.Item>
                                <img
                                    className="carouselImage"
                                    src="https://via.placeholder.com/300x600"
                                    alt="First slide"
                                />
                                <Carousel.Caption className="favori`teData">
                                    title <br />
                                    author <br />
                                    year
                                </Carousel.Caption>

                            </Carousel.Item>
                        ))}
                    </Carousel> */}
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


