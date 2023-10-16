import React from "react";

// import Movies from "@/mocks/movies.json";
// import Genres from "@/mocks/genres.json";

import { FeaturedMovie } from "@/components/featured-movie";
import { Categories } from "@/components/categories";
import { MoviesSection } from "@/components/movies-section";

export default function HomeContainer({
  selectedCategory,
  popularMovies = [],
  topRatedMovies = [],
  categoriesOfMovies = [],
}) {
  // console.log(selectedCategory.movies.length);
  return (
    <div>
      <FeaturedMovie movie={popularMovies?.[0]} />
      <Categories categories={categoriesOfMovies} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categoriesOfMovies.find((i) => `${i.id}` === selectedCategory.id)
              .name
          } // id si ayni olanin name ini yazdirdik
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection title="Populer Films" movies={popularMovies.slice(1, 6)} />

      <MoviesSection
        title="Top Rated Films"
        movies={topRatedMovies.slice(1, 6)}
      />
      {/* <MoviesSection
        title="Your Favorites"
        movies={Movies.results.slice(7, 12)}
      /> */}
    </div>
  );
}
