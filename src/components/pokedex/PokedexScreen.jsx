import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader";
import NumberPagination from "../NumberPagination";
import Pagination from "./Pagination";
import PokeCard from "./PokeCard";
import PokeName from "./PokeName";
import PokeType from "./PokeType";

const PokedexScreen = () => {
  const userName = useSelector((state) => state.nameUser);

  const pokemonPerPage = useSelector((state) => state.pokemonPerPage);

  const [loading, setLoading] = useState(true)

  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    const URL_POKEMON =
      " https://pokeapi.co/api/v2/pokemon/?limit=1154&offset=0";
    axios
      .get(URL_POKEMON)
      .then((res) => {
        setPokemons(res.data.results)
        setLoading(false)
      })
      .catch((err) => console.log(err));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  let arrayPokemons = [];

  if (pokemons?.length < pokemonPerPage) {
    arrayPokemons = [...pokemons];
  } else {
    const lastPokemons = currentPage * pokemonPerPage;
    arrayPokemons = pokemons?.slice(
      lastPokemons - pokemonPerPage,
      lastPokemons
    );
  }

  let arrayPages = [];
  let quantityPages = Math.ceil(pokemons?.length / pokemonPerPage);
  const pagesPerBlock = 5;
  let currentBlock = Math.ceil(currentPage / pagesPerBlock);

  if (currentBlock * pagesPerBlock >= quantityPages) {
    for (
      let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
      i <= quantityPages;
      i++
    ) {
      arrayPages.push(i);
    }
  } else {
    for (
      let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
      i <= currentBlock * pagesPerBlock;
      i++
    ) {
      arrayPages.push(i);
    }
  }

  return (
    <div className="pokedex-container">
      {
        loading ?
        <Loader/>
        :
        <>
        <div>
          <section className="subtitle-container">
        
            <p className="subtitle">Hello {userName},</p>
            <p className="subtitle-info">here you can find your favorite pokemon</p>
          </section>
          <section className="search-container">
            <PokeName />
            <NumberPagination />
            <PokeType />
          </section>
        </div>

      

        <section className="pokemon-card-container">
        {arrayPokemons?.map((pokemon) => (
          <PokeCard key={pokemon.url} url={pokemon.url} />
        ))}
        </section>
        <Pagination
        arrayPages={arrayPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        quantityPages={quantityPages}
      />
      </>
      }
      
    </div>
  );
};

export default PokedexScreen;
