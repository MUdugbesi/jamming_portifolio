import React from "react";
import './ButtonInput.css';
import Input from "./Input";

const ButtonInput = (props) => {
    const { search, onclick } = props;
    return (
        <>
            <div className="submit-input">
                <Input type="button"
                    value={search}
                    onClick={onclick} />
            </div>
        </>
    )
}

export default ButtonInput;