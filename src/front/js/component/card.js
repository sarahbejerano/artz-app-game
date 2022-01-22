import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/card.scss";


export const CollectionCard = ({ url, image, title }) => {
    const { store } = useContext(Context);

    return (
        <Link to={url} className="cardLink">
            <Card className="cardFull">
                <Card.Img
                    className="cardImage"
                    variant="top"
                    src={image}
                />
                <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">{title}
                    </Card.Title>
                </Card.Body>
            </Card>
        </Link>
    );
};


CollectionCard.propTypes = {
    url: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
};