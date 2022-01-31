import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/moreInfoArtworks.scss";
import { Container } from "react-bootstrap";
import { PageHeader } from "../component/header";
import { useParams } from "react-router-dom";
import { ArtPeriods } from "../service/collectionGenerator";


export const InfoArtwork = () => {
    const { store, actions } = useContext(Context)
    const { id, style } = useParams();
    const currentStyle = store.artworks[style];
    const history = useHistory();

    const [artwork, setArtwork] = useState(currentStyle && currentStyle[id]);

    console.log(store.artworks)
    console.log(id, style);

    // if (!ArtPeriods[style]) {
    //     history.push("/collection")
    // }

    //si current style existe utiliza currentID y sino es undefined 
    // useEffect(() => {
    //     if (currentStyle) {
    //         setArtwork(currentStyle[id]);
    //     }
    // }, [currentStyle]);

    // useEffect(() => {
    //     if (artwork === undefined) {
    //         history.push("/collection")
    //     }
    // }, [artwork]);


    console.log(artwork)

    const orientationClass = artwork && artwork.thumbnail.width > artwork.thumbnail.height ? "landscape" : "portrait";

    return (
        <>
            {artwork && (
                <Container className="infoArtWorkContainer">

                    <PageHeader />
                    <div className="infoArtworkBody" >
                        <div className={"artwork " + orientationClass} >
                            <img
                                src={artwork.imageUrl}
                                alt={artwork.title}
                                width={artwork.thumbnail.width}
                                height={artwork.thumbnail.height}
                                style={{ backgroundImage: artwork.thumbnail.lqip }}
                            />
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
