//OMDB api key 18e502d9-6aaf-4b9a-92c2-a3e198312197
//omdb short api key bab67a8e
const apiKey = 'bab67a8e';
export const OMDBApiUrl = `http://www.omdbapi.com/?apikey=${apiKey}`;

export default {
    getMovie: (movieId) =>  `${OMDBApiUrl}&i=${movieId}`,
    search: (search) => `${OMDBApiUrl}&s=${search}`,
};

