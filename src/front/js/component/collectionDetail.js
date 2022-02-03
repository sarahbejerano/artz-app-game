import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { PageHeader } from "../component/header";
import { CollectionCard } from "../component/card";
import { Row, Col, Container } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { ArtPeriods } from "../service/collectionGenerator";
import "../../styles/collectionDetail.scss";


export const CollectionForPeriod = () => {
    const { store, actions } = useContext(Context)
    const { style } = useParams();
    const currentStyle = ArtPeriods[style];
    const history = useHistory();
    if (currentStyle === undefined) {
        history.push("/collection")
    }

    useEffect(() => {
        if (!store.artworks[currentStyle.title]) {
            actions.getArtworksForPeriod(currentStyle.artworksQuery, currentStyle.title);
        }
    }, []);

    return (
        <div className="collectionForPeriodContainer">
            <PageHeader />
            <Container>
                <Row className="detailText">
                    {currentStyle.title}
                    {currentStyle.text}
                </Row>
                <Row xs={1} md={3} className="cardRow">
                    {store.artworks[currentStyle.title] && store.artworks[currentStyle.title].map((artwork, idx) => (
                        <Col className="cardColumn" key={idx}>
                            <CollectionCard
                                url={"/artwork/" + currentStyle.title + "/" + idx}
                                image={artwork.imageUrl}
                                altText={artwork.thumbnail.alt_text}
                                title={artwork.title}
                                artist={artwork.artist_title}
                            />
                        </Col>
                    )
                    )}
                </Row>
            </Container>
        </div>
    )
};




