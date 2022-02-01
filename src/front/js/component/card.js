import React from "react";

import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import "../../styles/card.scss";


export const CollectionCard = ({ url, image, title, year, artist, altText }) => {
    return (
        <Link to={url} className="cardLink">
            <Card className="cardFull">
                <Card.Img
                    className="cardImage"
                    variant="top"
                    src={image}
                    alt={altText}
                />
                <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">{title}
                        <Card.Text className="cardYear">{year}</Card.Text>
                    </Card.Title>
                    <Card.Text className="cardArtist">{artist}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
};


CollectionCard.propTypes = {
    url: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    artist: PropTypes.string,
    altText: PropTypes.string,
};