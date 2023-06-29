import React from 'react';
import '../css/Button.css';
import PropTypes from 'prop-types'

function Button({txt, num, bool}) {
    return(
        <>
            <button className="Button">{txt}</button>     
        </>
    );
};

Button.prototype = {
    txt: PropTypes.string.isRequired,
    num: PropTypes.number.isRequired,
    bool: PropTypes.bool
};

export default Button; 


