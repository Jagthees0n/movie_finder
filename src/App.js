import React, { useEffect, useState } from 'react'
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';

const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=key'; //replace the key with ur api key
const movie1 = {
"Poster" : "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg",
"Title" : "Spiderman the Verse",
"Type" : "series",
"Year" : "2019",
"imdbID" : "tt12122034"
};
const movie2 = {
    Poster
: 
"https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
Title
: 
"Italian Spiderman",
Type
: 
"movie",
Year
: 
"2007",
imdbID
: 
"tt2705436"
};

function App() {
     const [movies, setMovies] = useState([]);
     const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('Spiderman');
    },[]);

  return (
    <div className='app'>
      <h1>MoviesFinder</h1>

      <div className='search'>
        <input
        placeholder='Search for movies'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <img 
        src={SearchIcon}
        alt='search icon'
        onClick={()=>searchMovies(searchTerm)}/>
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
  )
}

export default App
