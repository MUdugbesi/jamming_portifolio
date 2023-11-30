import React from 'react';
import './Playlist.css';
import Input from './Input';
import Tracks from './Tracks';

const Playlist = (props) => {
  const { album, onclick, value, playlist, onRemoveItem, handleCreatePlaylist, handlePlaylistName, valueTwo } = props;
  if (album || playlist) {

    return (
      <>
        <div className='result_container'>
  
          <h1 className='result'>{value}</h1>
          {value === 'Results' ? album.map((alb, i) => {
            return (
              <Tracks track={alb} onclick={onclick} id={i} />
            )
          }) : ''}
  
          {value === '' ?
            <>
              <div className='input_playlist'>
                <Input type='text' id='text' onChange={handlePlaylistName} value={valueTwo} />
                {playlist.map((alb, i) => {
                  return (
                    <Tracks track={alb} onRemoveClick={onRemoveItem} value='' key={alb.id} id={i}/>
                    
                  )
                })}
              </div>
              <div className='playlist_input'><Input type="button" value='Save to Spotify' onClick={handleCreatePlaylist} /></div>
            </>
            : ''}
  
  
        </div>
      </>
    )
  }
}

export default Playlist;