import React, { useContext, useState, useEffect } from "react";
import { PageHeader } from "../component/header";
import { CollectionCard } from "../component/card";
import { Row, Col, Container } from "react-bootstrap"
import { Context } from "../store/appContext";
import { ArtPeriods } from "../service/collectionGenerator";
import "../../styles/collection.scss";

const randomNumber = (limit) => Math.floor(Math.random() * limit);

export const CollectionPage = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.getAllPeriods();
    }, []);

    const getImage = (artPeriod) => {
        if (store.artworks[artPeriod.title]) {
            const artworksForCurrentPeriod = store.artworks[artPeriod.title];
            const imageIndex = randomNumber(artworksForCurrentPeriod.length);

            return {
                image: store.artworks[artPeriod.title][imageIndex].imageUrl,
                altText: store.artworks[artPeriod.title][imageIndex].thumbnail.alt_text,
                thumbnail: store.artworks[artPeriod.title][imageIndex].thumbnail,
            };
        }
        return {};
    };

    return (
        <>
            <Container className="collectionPageContainer">
                <PageHeader />
                <Row xs={1} md={3} className="cardRow">
                    {ArtPeriods.map((artPeriod, idx) => (
                        <Col key={idx} className="cardColumn">
                            <CollectionCard
                                url={"/detail/" + idx}
                                title={artPeriod.title}
                                year={artPeriod.year}
                                {...getImage(artPeriod)}
                            />
                        </Col>
                    ))}
                </Row>

            </Container>
        </>
    );
};


