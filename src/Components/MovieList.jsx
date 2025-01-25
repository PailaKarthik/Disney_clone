import React, { useState, useEffect, useRef } from 'react';
import { getMoviesByGenreId } from './../Services/GlobalApi';

const MovieList = ({ id, idx }) => {
  const [Movies, setMovies] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getMoviesByGenreId(id);
        console.log("Movies fetched for genre", id, movies); // Debug log
        setMovies(movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, [id]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300, // Adjust the value to control the scroll distance
        behavior: 'smooth',
      });
    }
  };

  // Scroll right function
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300, // Adjust the value to control the scroll distance
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative py-5">
        {/* Left Button */}
        <button
            className="hidden md:block absolute left-2 md:left-5 top-1/2 transform -translate-y-1/2 z-10 text-white bg-transparent rounded-full p-2 font-bold text-2xl"
            onClick={scrollLeft}
        >
            &lt;
        </button>

        <div className="flex px-6 md:px-10 py-4 overflow-x-scroll space-x-3 md:space-x-5 scrollbar-none" ref={sliderRef}>
        {Movies.map((movie) => (
            <div>
                <img
                className={`transition-all duration-500 ease-in-out hover:cursor-pointer border-white hover:border-[3px] hover:scale-105 rounded-lg shadow-md shadow-black ${
                    idx % 3 === 0
                    ? 'min-h-[250px] min-w-[150px] md:min-h-[400px] md:min-w-[300px] object-cover' // Vertical ratio
                    : 'h-[150px] md:h-[200px] min-w-[110px] md:w-[200px] object-cover ' // Horizontal ratio
                }`}
                key={movie.id}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                />
                <h2 className={`hidden md:block text-sm md:text-lg font-semibold mt-2 md:mt-4 text-white-400 text-center hover:text-gray-400 hover:cursor-pointer md:${
                    idx % 3 === 0
                    ? ' min-w-[200px] object-cover' // Vertical ratio
                    : 'w-[110px] md:w-[150px]' // Horizontal ratio
                }`}
                >{movie.title}</h2>
            </div>
        ))}
        </div>

        {/* Right Button */}
        <button
            className="hidden md:block absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 z-10 text-white rounded-full p-2 bg-transparent font-bold text-2xl"
            onClick={scrollRight}>
            &gt;
      </button>
    </div>
  );
};

export default MovieList;
