import React, { useEffect, useState } from "react";

// for the pokemon section of the API docs check out:
//   https://pokeapi.co/docs/v2#pokemon
// for information on how the query parameters (/?limit=30) were written:
//   https://pokeapi.co/docs/v2#resource-listspagination-section

const API_URL = "https://pokeapi.co/api/v2/pokemon/?limit=30";

const ApiExample = () => {
  // creating state to hold the API results
  const [pokemonList, setPokemonList] = useState([]);

  // useEffect to handle API call side effects
  useEffect(() => {
    console.log("Running useEffect");
    fetch(API_URL) // using JS fetch with our Pokemon API URL
      .then(resp => resp.json()) // take the API response and turn it into JSON
      .then(json => {
        setPokemonList(json.results); // grab the results array from it and set state
      });
  }, []);
  /* SPECIAL NOTE: the second argument in useEffect, the dependency array [],
   tracks values (ONLY props/state) and if those values change between renders, 
   useEffect is ran again. */

  console.log("I am being rendered");

  // -------------- RENDER ------------------
  return (
    <div>
      {pokemonList.map(pokemon => (
        <div key={pokemon.name}>
          <p>{pokemon.name}</p>
          <p>{pokemon.url}</p>
        </div>
      ))}
    </div>
  );
};

export default ApiExample;
