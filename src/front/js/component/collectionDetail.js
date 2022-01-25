import React, { useContext, useState, useEffect } from "react";
import validator from "validator";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import useSWR from "swr";
import { PageHeader } from "../component/header";
import { CollectionCard } from "../component/card";
import { Row, Col, Container } from "react-bootstrap"
import "../../styles/collectionDetail.scss";


export const CollectionDetail = () => {

    return (
        <div className="collectionPageDetailContainer">
            <PageHeader />
            <Container>
                <Row className="detailText">
                    <p><a href="https://www.tate.org.uk/art/art-terms/m/modernism" target="blank" className="modernismLink">  MODERNISM  </a>
                        refers to a global movement in society and culture that from the early decades of the twentieth century sought a new alignment with the experience and values of modern industrial life. Building on late nineteenth-century precedents, artists around the world used new imagery, materials and techniques to create artworks that they felt better reflected the realities and hopes of modern societies. </p>
                    <p>The terms Modernism and Modern Art are generally used to describe the succession of art movements that critics and historians have identified since the realism of Gustav Courbet and culminating in abstract art and its developments in the 1960s.</p>
                </Row>
                <Row xs={1} md={3} className="cardRow">
                    {Array.from({ length: 9 }).map((_, idx) => (
                        <Col className="cardColumn">
                            <CollectionCard
                                url="/modernism"
                                title="Modernism"
                                image="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/6/18/1434647790018/d0bb6745-5cbe-4f5a-993d-4c9b25ab86b8-2060x1479.jpeg?width=465&quality=45&auto=format&fit=max&dpr=2&s=446f767582a2c8b288be76dd1113a62a" />
                        </Col>
                    )
                    )}
                </Row>
            </Container>
        </div>
    )
};




