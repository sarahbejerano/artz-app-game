import React from "react";
import { Link } from "react-router-dom";
import "../../styles/button.scss"
import PropTypes from 'prop-types';


export const LinkButton = ({ text, link, variant = "primary" }) => {

    return (

        <Link className="link-style" to={link}>
            <div className={`pixel-button ${variant}`}>
                <div className="body">
                    <p className="text">{text}</p>
                </div>
            </div>
        </Link>

    )
};



// aqui se definen  los propTypes que voy a necesitar para el boton

LinkButton.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
    variant: PropTypes.string,
};