import React from "react";
import HomeContainer from "@/containers/home";

import Movies from "@/mocks/movies.json";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home({ params }) {
  //console.log(">>>Home'daki params", params.category);

  await delay(5000); // BACKEND veri cekim simulasyon

  let selectedCategory;

  //category yoksa http://localhost:3000/ yani home page patlar.
  // category? yaparak onluyoruz
  if (params.category?.length > 0) {
    selectedCategory = true;
  }

  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0] ?? "", // ?? anlami  params.category?.[0] yoksa "" bos string don
        movies: selectedCategory ? Movies.results.slice(0, 5) : [],
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
