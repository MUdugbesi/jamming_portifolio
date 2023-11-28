import React from 'react';
import './SearchBar.css'
import Input from './Input';

const SearchBar = (props) => {

    const { value, inputValue, text } = props

    return (
        <>
            <div className='input-div'>
                <Input type={text}
                    value={value}
                    onChange={inputValue} />
            </div>

        </>
    )
}

export default SearchBar;