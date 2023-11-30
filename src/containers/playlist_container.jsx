import React from "react"
import Playlist from "../components/Playlist";

const AlbumList = () => {
    return (
        <>
            <Playlist value="Results" album={album} onclick={removeItemAndAddItem} />
        </>
    )
}

export default AlbumList;


//  module.exports.playList = () => {
//     return (
//         <>
//             <Playlist value='' valueTwo={playlistName} playlist={playlist} onRemoveItem={removeItem} handleCreatePlaylist={handleCreatePlaylist} handlePlaylistName={handlePlaylistName} />

//         </>
//     )
// }

