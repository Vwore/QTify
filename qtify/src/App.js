import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Hero from "./Hero/Hero";
import Section from "./Section/section";
import axios from "axios";
import { useEffect, useState } from "react";

const url = {
  top: "https://qtify-backend-labs.crio.do/albums/top",
  new: "https://qtify-backend-labs.crio.do/albums/new",
};

function App() {
  const [topAlbum, setTopAlbum] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);
  const [songs,setSongs] = useState([]);
  async function fetchAlbum(album) {
    try {
      const res = await axios.get(url[album]);
      if (album === "top") {
        setTopAlbum(res.data);
      }
      if (album === "new") {
        setNewAlbum(res.data);
      }
    } catch (e) {
      console.log(e.response);
    }
  }
  async function fetchSong() {
    try{
      const songResponse = await axios.get('https://qtify-backend-labs.crio.do/songs');
      setSongs(songResponse.data);
    }
    catch(e)
    {
      console.log(e.response);
    }
  }
  useEffect(() => {
    fetchAlbum("top");
    fetchAlbum("new");
    fetchSong();
  }, []);
  console.log("app.js");
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Section album={topAlbum} label={'Top'} />
      <Section album={newAlbum} label={'New'}/>
      <Section album={songs} label={''} isSong={true}/>

    </BrowserRouter>
  );
}

export default App;
