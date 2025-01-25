import axios from "axios";

// Function to fetch popular movies
const baseGenreUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=e05a7c08b6790eb9e2c1797cbb462630'
export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDVhN2MwOGI2NzkwZWI5ZTJjMTc5N2NiYjQ2MjYzMCIsIm5iZiI6MTczNzY5MjY4Mi41OTYsInN1YiI6IjY3OTMxNjBhNTU5ZTJkOTc0YjQ4MmQzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8l5y76W_7X23LdwprMFM_T02d-gsAi1ow6hiz3CcCbM`,
          Accept: 'application/json',
        },
      }
    );

    return response.data.results; // Return the movies array
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return []; // Return an empty array in case of error
  }
};

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDVhN2MwOGI2NzkwZWI5ZTJjMTc5N2NiYjQ2MjYzMCIsIm5iZiI6MTczNzY5MjY4Mi41OTYsInN1YiI6IjY3OTMxNjBhNTU5ZTJkOTc0YjQ4MmQzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8l5y76W_7X23LdwprMFM_T02d-gsAi1ow6hiz3CcCbM`,
            Accept: `application/json`,
        },
      }
    );

    return response.data.results; // Return the movies array
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return []; // Return an empty array in case of error
  }
};

export const getMoviesByGenreId = async (id) =>{
  try {
    const response = await axios.get(baseGenreUrl+'&with_genres='+id)
    return response.data.results;
  }
  catch(error){
    console.log('Error Fetching Genre Movies :',error);
    return [];
  }
}
