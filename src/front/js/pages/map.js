import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/map.scss";
import { LinkButton } from "../component/linkButton";
import Map from "../../img/Map.png";



export const MuseumMap = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="museumMapPage">
            <div className="mapImage">
                <h3 className="startAnimation">START</h3>
                <img src={Map} />
            </div>
            <div className="buttonContainer">
                <LinkButton text="NEXT" variant="secondary small" link={"/question"} />
            </div>
        </div>
    );
};



