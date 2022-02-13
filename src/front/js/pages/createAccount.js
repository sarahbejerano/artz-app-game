import React, { useContext, useState, useEffect } from "react";
import validator from "validator";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { RedButton } from "../component/redButton";
import { PageHeader } from "../component/header";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/login.scss";

export const CreateAccount = () => {
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
    const onProfileSubmit = () => {
        if (validator.isEmail(email) && !validator.isEmpty(password) && !validator.isEmpty(profileName)) {
            actions.createUserProfile(email, password, profileName);
        }
    }

    useEffect(() => {
        if (store.user !== null) {
            store.redirect ? history.push(store.redirect) : history.push("/profile");
            actions.setRedirect(null);
        }
    }, [store.user]);

    return (
        <div className="loginPage">
            <PageHeader />
            <Container className="inputContainer">
                <Row xs={1} md={2}>
                    <Col>
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
                        <div className="form-floating  mb-3 specialInput">
                            <input type="profile name" className="form-control"
                                id="floatingInput"
                                placeholder="profile name"
                                value={profileName}
                                onChange={onProfileNameChanged} />
                            <label htmlFor="floatingInput">Profile Name</label>
                        </div>
                        <div className="inputFooter">
                            <RedButton
                                text="sign up"
                                callback={onProfileSubmit}
                                className="redButton"
                            />
                            <p> already have an account?
                                <Link to="/login">login here </Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div >

    );
};
