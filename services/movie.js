const apiUrl = "https://api.themoviedb.org/3";
const authToken = `Bearer ${process.env.API_TOKEN}`;

const fetchMovieApi = async (pathName, query = "") => {
  //query='' anlami iniytial olarak bos string ama deger gelirse o deger gecerli
  // fetch link icinde {query} temiz yazmak icin yaptik link olarak {query ?? ""} versek de olurdu
  try {
    const response = await fetch(`${apiUrl}${pathName}?${query}`, {
      method: "GET",
      headers: {
        Authorization: authToken,
        accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Hata! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
// ======================================
const getPopularMovies = async () => {
  return fetchMovieApi("/movie/popular");
};
// ======================================
const getTopRatedMovies = async () => {
  return fetchMovieApi("/movie/top_rated");
};
// ======================================
const getCategoriesOfMovies = async () => {
  return fetchMovieApi("/genre/movie/list", `page=1`);
}; // page=1 i vermesek de olur sadece denedik
// ======================================
const getSingleCategorie = async (genreId) => {
  return await fetchMovieApi("/discover/movie", `with_genres=${genreId}`);
};
// ======================================
const getMovie = async (movieId) => {
  return await fetchMovieApi(`/movie/${movieId}`);
};
// ======================================

export {
  fetchMovieApi,
  getPopularMovies,
  getTopRatedMovies,
  getCategoriesOfMovies,
  getSingleCategorie,
  getMovie,
};
