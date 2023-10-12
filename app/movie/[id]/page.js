import React from "react";
import { notFound } from "next/navigation";

import { MovieContainer } from "@/containers/movie";

import Movies from "@/mocks/movies.json";

// async function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async olmasi sebebi sadece delay i calistiriyor olmasiydi su an gerekli degil
export default async function MoviePage({ params, searchParams }) {
  // console.log(params);
  // await delay(2000); // BACKEND veri cekim simulasyon

  const movieDetail = Movies.results.find((i) => i.id.toString() === params.id); // Parametre herzaman STRING olarak gelir. Eger is number ise hata olur

  if (!movieDetail) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new Error("Error happened");
  }

  return <MovieContainer movie={movieDetail} />;
}
