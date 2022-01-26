import React, { useContext, useState, useEffect } from "react";
import validator from "validator";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import useSWR from "swr";
import { PageHeader } from "../component/header";
import { CollectionCard } from "../component/card";
import { Row, Col, Container } from "react-bootstrap"
import "../../styles/collectionDetail.scss";
import { ArtPeriods } from "../service/collectionGenerator";
import { useParams } from "react-router-dom";


export const CollectionDetail = () => {
    const { style } = useParams();
    const currentStyle = ArtPeriods[style];
    const history = useHistory();
    if (currentStyle === undefined) {
        history.push("/collection")
    }
    return (
        <div className="collectionPageDetailContainer">
            <PageHeader />
            <Container>
                <Row className="detailText">
                    <p><a href="https://www.tate.org.uk/art/art-terms/m/modernism" target="blank" className="modernismLink">{currentStyle.title}  </a>{currentStyle.text}
                    </p>
                </Row>
                <Row xs={1} md={3} className="cardRow">
                    {currentStyle.artworks.map((artwork, idx) => (
                        <Col className="cardColumn" key={idx}>
                            <CollectionCard
                                url={"/artwork/" + artwork.id}
                                image={artwork.image_url} />
                        </Col>
                    )
                    )}
                </Row>
            </Container>
        </div>
    )
};




