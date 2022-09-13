import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../../css/input.css';

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'tel', 'file', 'url']),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    placeholder: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'secondary', 'error', 'primary-outline', 'secondary-outline', 'error-outline']),
    autoComplete: PropTypes.oneOf(['on', 'off']),
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    isError: PropTypes.bool,
    handleChange: PropTypes.func,
};


export default function Input({
    id,
    type = 'text',
    name,
    variant = 'primary',
    value,
    defaultValue,
    className = '',
    autoComplete,
    required,
    placeholder,
    isFocused,
    isError = false,
    handleChange,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        // <div className="flex flex-col items-start">
        <input
            id={id}
            type={type}
            name={name}
            value={value}
            className={
                `rounded-2xl py-[13px] px-7 w-full  input-${variant} ${className} ${isError ? 'input-error' : ''}`
            }
            ref={input}
            autoComplete={autoComplete}
            required={required}
            onChange={(e) => handleChange(e)}
            placeholder={placeholder}
            defaultValue={defaultValue}
            max={name == 'rating' ? 5 : null}

        />
        // </div>
    );
}
