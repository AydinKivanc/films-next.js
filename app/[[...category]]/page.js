import React from "react";
import HomeContainer from "@/containers/home";

import {
  getPopularMovies,
  getTopRatedMovies,
  getCategoriesOfMovies,
  getSingleCategorie,
} from "@/services/movie";
//import Movies from "@/mocks/movies.json";

// ======================================
// const getPopularMovies = async () => {
//   return fetchMovieApi("/movie/popular");
// };
// ======================================
// const getTopRatedMovies = async () => {
//   return fetchMovieApi("/movie/top_rated");
// };
// ======================================
// const getCategoriesOfMovies = async () => {
//   return fetchMovieApi("/genre/movie/list", `page=1`);
// }; // page=1 i vermesek de olur sadece denedik
// ======================================
// const getSingleCategorie = async (genreId) => {
//   return await fetchMovieApi("/discover/movie", `with_genres=${genreId}`);
// };
// ======================================

export default async function Home({ params }) {
  //console.log(">>>Home'daki params", params.category);
  let selectedCategory;

  /* Ilk olarak bu sekilde yaptik bu da olur ama PARALEL FETCH daha performanslidir.
  const { results: popularMovies } = await getPopularMovies();
  const { results: topRatedMovies } = await getTopRatedMovies();

results donen responce daki json daki bir array in ismi ve sadece onu kullanacagimiz icin bu sekilde degiskene verdik
const popularMovies = await getPopularMovies().results; Await ile kullanimda boyle yazilmaz. cunku .results u bekler 
*/
  // ! PARALEL FETCH

  //   const popularMoviesPromise = getPopularMovies();
  //   const topRatedMoviesPromise = getTopRatedMovies();
  //   const categoriesOfMoviesPromide = getCategoriesOfMovies();

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categoriesOfMovies },
  ] = await Promise.all([
    getPopularMovies(),
    getTopRatedMovies(),
    getCategoriesOfMovies(),
  ]);
  // ! --------------------------

  //category yoksa http://localhost:3000/ yani home page patlar.
  // category? yaparak onluyoruz
  if (params.category?.length > 0) {
    const { results } = await getSingleCategorie(params.category[0]);
    selectedCategory = results;
  }
  // console.log(">>> selectedCategory ", selectedCategory);

  return (
    <HomeContainer
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      categoriesOfMovies={categoriesOfMovies}
      selectedCategory={{
        id: params.category?.[0] ?? "", // ?? anlami  params.category?.[0] yoksa "" bos string don
        movies: selectedCategory ? selectedCategory.slice(0, 5) : [],
      }}
    />
  );
}

// ! Onemli
/*
app altinda [[...post]]  icinde page.js var ve app altinda bir page.js daha olmaz. 
Cunku linkte parametre olmaz ise  [[...post]] icindeki page.js mi yoksa app icindeki page.js mi calisacak ortalik karisir. 
Cunku.  [[...post]]  altinda ki page.js sayet parametre yoksa default calisir. 
Bu nedenle app icindeki page.js bu durumda kaldirilir  [[...post]]  icine tasinir
*/
