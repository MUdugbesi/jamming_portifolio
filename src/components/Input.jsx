import React from 'react';

const Input = ({ type, value, className, onChange, onClick }) => {
    return (
        <>
            <input type={type}
                value={value}
                className={className}
                onClick={onClick}
                onChange={onChange}

            />
        </>
    )
}

export default Input;