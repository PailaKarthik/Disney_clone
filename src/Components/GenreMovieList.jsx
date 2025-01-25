import React from 'react';
import Genres from './../Constant/Genres'; 
import MovieList from './MovieList';

const GenreMovieList = () => {
  return (
    <div>
      {Genres.map((genre,index) => index<=8 && (
        <div key={genre.id}>
          <h2 className=" font-bold px-4 md:px-10 text-xl md:text-2xl hover:underline underline-offset-8 hover:text-white hover:cursor-pointer uppercase">
            {genre.name}
          </h2>
          <MovieList id={genre.id} idx={index+1}/>
        </div>
      ))}
    </div>
  );
};

export default GenreMovieList;
