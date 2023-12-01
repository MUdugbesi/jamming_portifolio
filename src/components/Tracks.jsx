import React from 'react';



const Tracks = ({ track, onclick, play, value, onRemoveClick, id }) => {
    if (track) {


        const handleAddClick = () => {
            onclick(track.id)
        }

        const handleRemoveItem = () => {
            onRemoveClick(track.id)
        }

        return (
            <>

                <div className='album_container' key={id}>

                    <div>
                        <h2 className='track_name'>{track.name}</h2>
                        <div className='small'>
                            <small className='artist_name'>{track.artists[0].name}</small>
                            <small className='album_name'>{track.album.name}</small>
                            <small className='album_link'><a href={track.album.external_urls.spotify}>View song</a></small>
                        </div>
                    </div>


                    {value !== play ?
                        <p onClick={handleRemoveItem}>
                            &minus;
                        </p> :
                        <p onClick={handleAddClick}>
                            &#43;
                        </p>
                    }
                </div>

            </>
        )
    }

}

export default Tracks;