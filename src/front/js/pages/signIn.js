import React, { useContext, useState, useEffect } from "react";
import validator from "validator";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signIn.scss";
import { PageButton } from "../component/pageButton";
import { Title } from "../component/title";



export const SignIn = () => {
    const history = useHistory();
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const onEmailChanged = (e) => {
        setEmail(e.target.value)
    };
    const [password, setPassword] = useState("");
    const onPasswordChanged = (e) => {
        setPassword(e.target.value)
    };
    const signIn = () => {
        if (validator.isEmail(email) && !validator.isEmpty(password)) {
            actions.signInProfile(email, password);

        }
    }
    useEffect(() => {
        if (store.user !== null) {
            history.push("/intro")
        }
    }, [store.user]);

    return (
        <div className="signInPage">
            <Title />
            <h2>SIGN IN</h2>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                    value={email}
                    onChange={onEmailChanged}
                />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating  mb-3 specialInput">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                    value={password}
                    onChange={onPasswordChanged} />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="buttonContainer">
                <PageButton
                    text="PLAY NOW!!" variant="primary"
                    callback={signIn} />
            </div>
        </div >
    );
};