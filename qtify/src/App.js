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
  useEffect(() => {
    fetchAlbum("top");
    fetchAlbum("new");
  }, []);
  console.log("app.js");
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Section album={topAlbum} label={'Top'} />
      <Section album={newAlbum} label={'New'}/>

    </BrowserRouter>
  );
}

export default App;
