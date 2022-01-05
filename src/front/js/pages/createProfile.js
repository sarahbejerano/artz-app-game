import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/createProfile.scss";
import { PageButton } from "../component/pageButton";
import validator from "validator";
import { avatars } from "../service/avatars";

export const CreateProfile = () => {
    const history = useHistory();
    const { store, actions } = useContext(Context);

    const [email, setEmail] = useState("");
    const onEmailChanged = (e) => {
        setEmail(e.target.value);
    };
    const [password, setPassword] = useState("");
    const onPasswordChanged = (e) => {
        setPassword(e.target.value);
    };
    const [profileName, setProfileName] = useState("");
    const onProfileNameChanged = (e) => {
        setProfileName(e.target.value);
    };
    const [avatarID, setAvatarID] = useState("");
    const onAvatarIDChanged = (key) => {
        setAvatarID(key);
    };
    const onProfileSubmit = () => {
        if (validator.isEmail(email) && !validator.isEmpty(password) && !validator.isEmpty(profileName) && !validator.isEmpty(avatarID)) {
            actions.createUserProfile(email, password, profileName, avatarID);
        }
    }
    //se esta llamando la funcion cuando cambia el usuario, y si el usuario esta creado lo redireccionara a "/question page"
    useEffect(() => {
        if (store.user !== null) {
            history.push("/question")
        }
    }, [store.user]);

    return (
        <div className="createProfilePage">
            <h2>CREATE PROFILE</h2>
            <div className="form-floating mb-3">
                <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={email}
                    onChange={onEmailChanged}
                />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating  mb-3">
                <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={onPasswordChanged} />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating  mb-3">
                <input
                    type="your profile name" className="form-control"
                    id="floatingInput"
                    placeholder="your profile name"
                    value={profileName}
                    onChange={onProfileNameChanged}
                />
                <label htmlFor="floatingInput">your profile name </label>
            </div>
            <h2>CHOOSE AVATAR</h2>
            <div className="container">
                <div className="row align-items-center">
                    {Object.keys(avatars).map(avatarKey => {
                        return (
                            <div
                                className={"col-3 avatar" + (avatarKey === avatarID ? " selected" : "")}
                                onClick={() => { onAvatarIDChanged(avatarKey) }}
                                key={avatarKey}
                            >
                                <img src={avatars[avatarKey]} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="buttonContainer">
                <PageButton
                    text="FINISH!!"
                    variant="primary small"
                    callback={onProfileSubmit} />
            </div>
        </div >
    );
};