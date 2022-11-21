import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=d9d770a";
// const movie1 = 
//   {
//     "Title": "Hollywood's Master Storytellers: Spiderman Live",
//     "Year": "2006",
//     "imdbID": "tt2158533",
//     "Type": "movie",
//     "Poster": "N/A"
// }


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
  
    <div className="app">
      {/* create a new state */}
      
      
      <h1>Application</h1>
      <div className="search">
        <input placeholder="Search for movies"
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <img src={SearchIcon}
          alt="search"  onClick={() => searchMovies(searchTerm)}
        />
      </div>
      

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>


      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

    </div>


  );
};

export default App;