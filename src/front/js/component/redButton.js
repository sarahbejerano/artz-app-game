import React from "react";
import "../../styles/redButton.scss"
import PropTypes from 'prop-types';


export const RedButton = ({ text, callback, className }) => {

    return (
        <button className={`red-button ${className} `}
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


};