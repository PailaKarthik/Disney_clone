import React, { useState, useEffect, useRef } from 'react';
import { getTrendingMovies } from '../Services/GlobalApi';

const Slider = () => {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const trendingMovies = await getTrendingMovies();
      setMovies(trendingMovies);
    };
    fetchTrendingMovies();
  }, []);

  // Scroll left function
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
    <div className="relative overflow-hidden">
      {/* Left Button */}
      <button
        className="hidden md:block absolute left-2 md:left-5 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
        onClick={scrollLeft}
      >
        &lt;
      </button>

      {/* Movie Slider */}
      <div
        ref={sliderRef}
        className="flex px-6 md:px-10 py-4 overflow-x-scroll space-x-1 scrollbar-none md:space-x-3"
      >
        {movies.map((movie) => (
          <img
            className="w-full md:w-[400px] h-[250px] md:h-[300px] object-cover duration-300 ease-in-out hover:cursor-pointer hover:scale-105 rounded-md hover:shadow-md hover:shadow-gray-800" 
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>

      {/* Right Button */}
      <button
        className="hidden md:block absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
        onClick={scrollRight}
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;
