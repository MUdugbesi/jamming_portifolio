import React from "react";
import './ButtonInput.css';

const ButtonInput = (props) => {
   const { search, onclick } = props;
    return (
        <>
            <div className="submit-input">

            <input
                    type="button"
                    value={search}
                    onClick={onclick}
            />
            </div>
        </>
    )
}

export default ButtonInput;