import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/moreInfoArtworks.scss";
import { Container } from "react-bootstrap";
import { PageHeader } from "../component/header";
import { useParams } from "react-router-dom";
import { ArtPeriods } from "../service/collectionGenerator";
import { ModalMenu } from "../component/modal";

export const InfoArtwork = () => {
    const { store, actions } = useContext(Context)
    const history = useHistory();
    const { id, style } = useParams();
    const currentStyle = store.artworks[style];
    const artwork = currentStyle && currentStyle[id];

    useEffect(() => {
        if (!artwork) {
            const validPeriod = ArtPeriods.find(period => period.title === style);

            // No es un periodo valido
            if (!validPeriod) {
                history.push("/collection")
            } else {
                actions.getArtworksForPeriod(validPeriod.artworksQuery, validPeriod.title);
            }
        }
    }, [artwork]);

    const orientationClass = artwork && artwork.thumbnail.width > artwork.thumbnail.height ? "landscape" : "portrait";

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            {artwork && (
                <Container className="infoArtWorkContainer">

                    <PageHeader />
                    <div className="infoArtworkBody" >
                        <div className={"artwork " + orientationClass} >
                            <img
                                src={artwork.imageUrl}
                                alt={artwork.thumbnail.alt_text}
                                width={artwork.thumbnail.width}
                                height={artwork.thumbnail.height}
                                style={{ backgroundImage: artwork.thumbnail.lqip }}
                                onClick={() => setModalShow(true)}
                            />
                            {artwork && <ModalMenu
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                imageUrl={artwork.imageUrl}
                                altText={artwork.thumbnail.alt_text}

                            />}
                        </div>

                        <div className="text">
                            <p> "{artwork.title}"</p>
                            <p> by {artwork.artist_title}</p>
                            <p>{artwork.place_of_origin}, {artwork.date_end}</p>
                            <p> {artwork.style_title} art movement</p>
                            <p> {artwork.medium_display}</p>
                            <p>{artwork.dimensions}</p >
                        </div>


                    </div>

                </Container>
            )
            }
        </>
    );
}
