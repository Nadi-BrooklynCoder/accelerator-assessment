import React from 'react';
import { useState, useEffect } from "react";
import Anime from "./Anime";

const API = process.env.REACT_APP_BASE_URL;


function Animes() {
  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data

  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch(`${API}/animes`)
      .then(res => res.json())
      .then(res => setAnimes(res))
      .catch(err => console.log(err));
  }, [API])

  return (
    <section className="index" id="anime-list">
      {animes.map((anime) => {
  
        return <Anime key={anime.id} name={anime.name} description={anime.description} />
      })}
    </section>
  );
}

export default Animes;
