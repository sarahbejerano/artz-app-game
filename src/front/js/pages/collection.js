import React, { useContext, useState, useEffect } from "react";
import { PageHeader } from "../component/header";
import { CollectionCard } from "../component/card";
import { Row, Col } from "react-bootstrap"
import "../../styles/collection.scss";
import { ArtPeriods } from "../service/collectionGenerator";


export const CollectionPage = () => {

    return (
        <>
            <div className="collectionPageContainer">
                <PageHeader />
                <Row xs={1} md={3} className="cardRow">
                    {ArtPeriods.map((artPeriod, idx) => (
                        <Col key={idx} className="cardColumn">
                            <CollectionCard url={"/detail/" + artPeriod.title} title={artPeriod.title} year={artPeriod.year} image={artPeriod.artworks[0].image_url} />
                        </Col>
                    ))}
                </Row>

            </div>
        </>
    );
};



