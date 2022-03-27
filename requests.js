const API_KEY = "670a1117bb4e2624bc375e29bbc28f60";

const requests ={
    fetchGenreMovie: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    fetchGenreTv:`genre/tv/list?api_key=${API_KEY}&language=en-US`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    }

export default requests;