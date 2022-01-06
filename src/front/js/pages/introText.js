import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/introText.scss";
import { LinkButton } from "../component/linkButton";



export const IntroText = () => {
    const { store, actions } = useContext(Context);


    return (
        <div className="textContainer">
            <div className="textIntro">
                <p>
                    You have fallen asleep in one of
                    the rooms of a museum. It's almost
                    midnight and you are alone, your only companions are the works of art.
                    They'll be your only help to find the way out, through your answers to their questions you'll <br />
                    be able to advance on your way. You have little time, only until midnight you'll have their help. Hurry up! Time is running out...
                </p>
            </div>
            <div className="buttonContainer">
                <LinkButton text="NEXT" variant="secondary small" link={"/map"} />
            </div>
        </div>
    );
};