import React from 'react';
import './SearchBar.css'

const SearchBar = (props) => {

    const { value, inputValue, text } = props

    return (
        <>
            <div className='input-div'>
                <input
                    type={text}
                    value={value}
                    onChange={inputValue}
                />
            </div>

        </>
    )
}

export default SearchBar;