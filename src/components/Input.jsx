import React from 'react';

const Input = ({ type, value, className, onChange, onClick, placeholder }) => {
    return (
        <>
            <input type={type}
                value={value}
                className={className}
                onClick={onClick}
                onChange={onChange}
                placeholder={placeholder}
            />
        </>
    )
}

export default Input;