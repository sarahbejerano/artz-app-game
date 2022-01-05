import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/createProfile.scss";
import { PageButton } from "../component/pageButton";
import { Form } from "react-bootstrap";
import MonaLisa from "../../img/MonaLisa.png";
import AnaMendieta from "../../img/AnaMendieta.png";
import Dali from "../../img/Dali.png";
import Duchamp from "../../img/Duchamp.png";
import FridaKhalo from "../../img/FridaKhalo.png";
import GeorgiaOkeeffe from "../../img/GeorgiaOkeeffe.png"
import LouiseBorgeoisepng from "../../img/LouiseBorgeoisepng.png"
import VanGogh from "../../img/VanGogh.png"

export const CreateProfile = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="createProfilePage">
            <h2>CREATE PROFILE</h2>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating  mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <div className="form-floating  mb-3">
                <input type="your profile name" className="form-control" id="floatingInput" placeholder="your profile name" />
                <label for="floatingInput">your profile name </label>
            </div>
            <h2>CHOOSE AVATAR</h2>
            <div className="container">
                <div className="row align-items-center">
                    <div class="col">
                        <img src={MonaLisa} />
                    </div>
                    <div className="col">
                        <img src={AnaMendieta} />
                    </div>
                    <div className="col">
                        <img src={Dali} />
                    </div>
                    <div className="col">
                        <img src={Duchamp} />
                    </div>
                </div>
                <div className="row align-items-center">
                    <div class="col">
                        <img src={FridaKhalo} />
                    </div>
                    <div className="col">
                        <img src={GeorgiaOkeeffe} />
                    </div>
                    <div className="col">
                        <img src={LouiseBorgeoisepng} />
                    </div>
                    <div className="col">
                        <img src={VanGogh} />
                    </div>
                </div>
            </div>
            <div className="buttonContainer">
                <PageButton text="DONE!!" variant="primary small" callback={() => { }} />
            </div>
        </div >
    );
};