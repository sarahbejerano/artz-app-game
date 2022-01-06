import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/userProfile.scss";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import star from "../../img/star.png";
import { avatars } from "../service/avatars";
import { PageButton } from "../component/pageButton";


export const UserProfile = ({ onQuit, ...props }) => {
    const history = useHistory();
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        if (store.user === null) {
            history.push("/")
        }
    }, [store.user]);

    const restartScore = () => {
        actions.resetScore();
        history.push("/")
    };

    return (
        <div className="userProfileContainer">
            <div className="avatarProfile"> {store.user && <img src={avatars[store.user.avatarID]} />}</div>
            {store.user && <h2 className="nameProfile">
                {store.user.profileName}
            </h2>}


            <img className="pointsStar" src={star} />
            <div className="scoreplayer">{store.score}/10
            </div>
            <div className="buttonContainer">
                <PageButton text="finish" variant="secondary"
                    callback={() => { restartScore() }} />
            </div>
        </div>

    );
};

UserProfile.propTypes = {
    onQuit: PropTypes.func,


};


