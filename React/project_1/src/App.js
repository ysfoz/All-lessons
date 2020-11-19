import React, { useState, useEffect } from "react";
import axios from "axios";

import './App.css';
import {SearchBox} from "./components/SearchBox";
import {CardList} from "./components/CardList";

const apiKey = "c69cee1bc9f54976ad4ca3a2600ad15c"; //temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";


function App() {

  const [movieList, setMovieList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("Matrix")

  useEffect(()=>{
      axios.get(
          baseUrl, {params: {
          api_key: apiKey,
          page: 20,
          query: searchKeyword
          }}
      )
      .then((res)=> setMovieList(res?.data?.results))
      .catch()
      .finally()
  },[searchKeyword])

  return (
    <div className="App">
      <SearchBox setSearchKeyword={setSearchKeyword}/>
      <CardList movieList={movieList} baseImageUrl={baseImageUrl} />
    </div>
  );
}

export default App;
