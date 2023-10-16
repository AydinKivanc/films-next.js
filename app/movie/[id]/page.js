import React from "react";
import { notFound } from "next/navigation";

import { MovieContainer } from "@/containers/movie";
import { getMovie } from "@/services/movie";

export default async function MoviePage({ params, searchParams }) {
  // console.log(params);
  // await delay(2000); // BACKEND veri cekim simulasyon

  const movieDetail = await getMovie(params.id);

  //const movieDetail = Movies.results.find((i) => i.id.toString() === params.id); // Parametre herzaman STRING olarak gelir. Eger is number ise hata olur

  if (!movieDetail) {
    notFound();
  }

  // BACKENDE baglandi artik params icinden alacagiz zaten service/movie.js de
  // if (searchParams.error === "true") {
  //   throw new Error("Error happened");
  // }

  return <MovieContainer movie={movieDetail} />;
}
