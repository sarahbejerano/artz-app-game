import React from "react";
import PropTypes from 'prop-types';
import "../../styles/redButton.scss"


export const RedButton = ({ text, callback, className, size }) => {
    return (
        <button className={`red-button ${className} ${size}`}
            onClick={callback}>
            <div className="body">
                <p className="text">{text}</p>
            </div>
        </button>
    )
};


RedButton.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func,
    size: PropTypes.string,

};