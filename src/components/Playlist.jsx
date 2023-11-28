import React from 'react';
import './Playlist.css';
import Input from './Input';

const Playlist = (props) => {
  const { album, onclick, value } = props;
  return (
    <>
      <div className='result_container'>
        <h1 className='result'>{value}</h1>

        {album !== undefined ? album.map((alb, i) => {
          return (

            <div className='album_container'>
              <div>
                <h2 className='track_name'>{alb.name}</h2>
                {/* <img src={alb.album.images[0].url} alt="Images" /> */}
                <div className='small'>
                  <small className='artist_name'>{alb.album.artists[0].name}</small>
                  <small className='album_name'>{alb.album.name}</small>
                </div>
              </div>
              <p onClick={() => alert(album[i].name)}>
                &#43;
              </p>
            </div>
          )
        }) : ''}

        {value === '' ?
          
          
          <div className='playlist_input'><Input type="button" value='Save to Spotify' /></div>
          
          : ''}
      </div>
    </>
  )
}

export default Playlist