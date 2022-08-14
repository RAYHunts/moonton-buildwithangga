import React from 'react';
import PropTypes from 'prop-types';
import './../../css/button.css';

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        'primary', 
        'warning', 
        'danger', 
        'light-outline', 
        'white-outline'
    ]),
    children: PropTypes.node,
    processing: PropTypes.bool,
};

export default function Button({ 
    type = 'submit', 
    className = '', 
    variant = 'primary',
    processing, 
    children 
}) {
    return (
        <button
            type={type}
            className={`
                rounded-2xl py-[13px] text-center w-full 
                ${processing && 'opacity-25 cursor-wait'} 
                btn-${variant}
                ${className}
                ` }
            disabled={processing}
        >
            {children}
        </button>
    );
}
