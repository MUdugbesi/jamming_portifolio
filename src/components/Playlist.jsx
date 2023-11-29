import React from 'react';
import './Playlist.css';
import Input from './Input';
import Tracks from './Tracks';

const Playlist = (props) => {
  const { album, onclick, value, playlist, onRemoveItem } = props;
  return (
    <>
      <div className='result_container'>

        <h1 className='result'>{value}</h1>
        {value === 'Results' ? album.map((alb, i) => {
          return (
            <Tracks track={alb} onclick={onclick} />
          )
        }) : ''}


        {value === '' ?
          <>
            <div className='input_playlist'>
              <Input />
              {playlist.map((alb, i) => {
                return (
                  <Tracks track={alb} onRemoveClick={onRemoveItem} value='' />
                )
              })}
            </div>
            <div className='playlist_input'><Input type="button" value='Save to Spotify' /></div>
          </>
          : ''}


      </div>




    </>
  )
}

export default Playlist;