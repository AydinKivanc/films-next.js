import React from "react";

import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";

import { FeaturedMovie } from "@/components/featured-movie";
import { Categories } from "@/components/categories";
import { MoviesSection } from "@/components/movies-section";

export default function HomeContainer({ selectedCategory }) {
  console.log(selectedCategory.movies.length);
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            Genres.genres.find((i) => i.id.toString() === selectedCategory.id)
              .name
          } // id si ayni olanin name ini yazdirdik
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection
        title="Populer Films"
        movies={Movies.results.slice(1, 6)}
      />
      <MoviesSection
        title="Your Favorites"
        movies={Movies.results.slice(7, 12)}
      />
    </div>
  );
}
