import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../styles/iconButton.scss"


export const IconButton = ({ text, onClick, variant = "icon", className, icon }) => {

    return (
        <button className={`icon-button ${variant} ${className} `} onClick={onClick}>
            <div className="body">
                {text && <p className="text">{text}</p>}
                <FontAwesomeIcon className="fontIcon" icon={icon} />
            </div>
        </button>
    )
};


IconButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    variant: PropTypes.string,
};
