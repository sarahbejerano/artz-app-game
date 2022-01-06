import React from "react";
import "../../styles/button.scss"
import PropTypes from 'prop-types';


export const PageButton = ({ text, callback, variant = "primary", className }) => {

    return (
        <button className={`pixel-button ${variant} ${className} `} onClick={callback}>
            <div className="body">
                <p className="text">{text}</p>
            </div>
        </button>
    )
};


PageButton.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func,
    variant: PropTypes.string,
};