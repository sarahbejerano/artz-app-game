import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/userProfile.scss";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import star from "../../img/star.png";
import { avatars } from "../service/avatars";
import { LinkButton } from "../component/linkButton";


export const UserProfile = () => {
    const history = useHistory();
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        if (store.user === null) {
            history.push("/")
        }
    }, [store.user]);

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
                <LinkButton text="finish" variant="secondary" link={"/"} />
            </div>
        </div>

    );
};


