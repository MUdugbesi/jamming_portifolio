import React from 'react'

const Playlist = (props) => {
  const { playlist, artist, album } = props;
  return (
    <>
      <h1>Playlist</h1>
      
        {album.map((alb) => {
          return (
            <div className=''>
              <h2>{alb.name}</h2>
              <img src={alb.album.images[0].url} alt="Images" />
              <h1>{alb.album.name}</h1>
            </div>
          )
        })}
      


    </>
  )
}

export default Playlist