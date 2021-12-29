import React from "react";
import "../../styles/button.scss"
import PropTypes from 'prop-types';


export const PageButton = ({ text, callback, variant = "primary" }) => {

    return (
        <button className={`pixel-button ${variant}`} onClick={callback}>
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