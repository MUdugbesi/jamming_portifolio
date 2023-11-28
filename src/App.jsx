import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ButtonInput from './components/ButtonInput';
import Playlist from './components/Playlist';

import './App.css';

function App() {

  // Input Value Section
  const [inputValue, setInputValue] = useState('');
  const handleInputValue = ({ target }) => {
    setInputValue(target.value)
  };

  // access Token 
  const [accessToken, seTAccessToken] = useState('')
  // set Playlist

  const [playlist, setPlaylist] = useState([]);

  const [artist, setArtist] = useState([])
  const [album, setAlbum] = useState([])



  // get access token using useEffect
  useEffect(() => {
    const CLIENT_ID = '3b1b00ae508c4761b79d99234b5de8a5';
    const CLIENT_SECRET = '22230a11d91e4ee6a3ff52303b29b8dc';
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

    }

  }


  // get artistID using input value artist name

  const getArtistId = async () => {
    if (inputValue) {
      const url2 = 'https://api.spotify.com/v1/search?q=' + inputValue + '&type=artist&limit=2';
      try {
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

    const artistId = await getArtistId();

    const url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=ES&limit=2`;
    const response = await fetch(url, option);
    const jsonResponse = await response.json();
    const tracks = jsonResponse.tracks
    setAlbum(tracks)
  }

  // get data from spotify
  async function getSpotify() {
    artistTracks();
    setInputValue('')

  }






  return (
    <div className='App'>
      <Header />
      <SearchBar value={inputValue} inputValue={handleInputValue} text='text' />
      <ButtonInput search='Search' onclick={getSpotify} />

      <Playlist album={album} />

    </div>
  )
}

export default App
