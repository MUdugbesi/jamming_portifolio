import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ButtonInput from './components/ButtonInput';
import Playlist from './components/Playlist';
// import  AlbumList  from './containers/playlist_container'
import './App.css';

const CLIENT_ID = '3b1b00ae508c4761b79d99234b5de8a5';
const CLIENT_SECRET = '22230a11d91e4ee6a3ff52303b29b8dc';

function App() {

  // Input Value Section
  const [inputValue, setInputValue] = useState('');
  const handleInputValue = ({ target }) => {
    setInputValue(target.value)
  };

  // access Token 
  const [accessToken, seTAccessToken] = useState('')

  // setAlbum
  const [album, setAlbum] = useState([]);

  // setPlaylist
  const [playlist, setPlaylist] = useState([]);

  // set playlist name
  const [playlistName, setPlaylistName] = useState('Your Playlists Name');
  const handlePlaylistName = ({ target }) => {
    setPlaylistName(target.value)
  }

  // get access token on first mount using useEffect
  useEffect(() => {
    const url = 'https://accounts.spotify.com/api/token';
    const authParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    const getAccessToken = async () => {
      try {
        const response = await fetch(url, authParams)
        const jsonResponse = await response.json();
        const access_token = jsonResponse.access_token;
        seTAccessToken(access_token);

      } catch (e) {
        console.log(e)
      }
    }
    getAccessToken()
  }, []);

  // Request params
  const option = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken,
    },
  }

  // get artistID using input value artist name
  const getArtistId = async () => {
    if (inputValue) {
      try {
        const url2 = 'https://api.spotify.com/v1/search?q=' + inputValue + '&type=artist&limit=2';
        const response = await fetch(url2, option);
        const jsonResponse = await response.json();
        return jsonResponse.artists.items[0].id;
      }
      catch (e) {
        console.log(e)
      }
    } else {
      alert('Enter Valid Artist name or ...')
    }

  }

  // get artist top-tracks with id;
  const artistTracks = async () => {
    try {
      const artistId = await getArtistId();
      const url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=ES`;
      const response = await fetch(url, option);
      const jsonResponse = await response.json();
      const tracks = jsonResponse.tracks
      setAlbum(tracks)
      
    } catch (e) {
      console.log(e)
    }
  }


  const removeItemAndAddItem = (itemIdToRemove) => {
    // filtered is an array
    const filtered = album.filter(list => list.id === itemIdToRemove);
console.log(filtered)
    const addItem = (item) => {
      item = filtered[0];
      if (!playlist.includes(item)) {
        setPlaylist([...playlist, item])
      }
    }
    addItem();
  }

  const removeItem = (itemIdToRemove) => {
    setPlaylist((prevlist) => prevlist.filter(list => list.id !== itemIdToRemove))
  }


  const handleCreatePlaylist = () => {
    if (playlistName && playlist.length > 1) {
      alert('Still working on this functionality')
      alert('Successfully Saved to spotify');
      setPlaylist([]);
      setPlaylistName('')
    } else {
      alert('Playlist name cant be empty and add two or more tracks to create list')

    }

  }


  // get data from spotify
  async function getSpotify() {
    if (inputValue) {
      try {
        await artistTracks();
        setInputValue('')
      } catch (e) {
        console.log(e)
      }
    }
  }

  async function createPlayist() {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken,
      },
      body: {
        "name": { playlistName },
        "description": "New playlist description",
        "public": true,
      }
    }
    const user_id = '317b66dlyvs3zjdqz5hzwkfdr734';
    const url = 'https://api.spotify.com/v1/users/' + user_id + '/playlists';
    const response = await fetch(url, option);
    const result = await response.json();
  }


  return (
    <>
      <div className='App'>
        <Header />
        <h2 className='description'>Get Top Ten Tracks of Selected Artist</h2>
        <SearchBar value={inputValue} inputValue={handleInputValue} text='text' placeholder='Enter Artist Name' />
        <ButtonInput search='Search' onclick={getSpotify} />

        <div className='grid_result'>
          <Playlist value="Results" album={album} onclick={removeItemAndAddItem} />
          <Playlist value='' valueTwo={playlistName} playlist={playlist} onRemoveItem={removeItem} handleCreatePlaylist={handleCreatePlaylist} handlePlaylistName={handlePlaylistName}
          />
        </div>
      </div>
    </>
  )
}

export default App;
