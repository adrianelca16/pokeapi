import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NumberPagination from "../NumberPagination";
import Pagination from "../pokedex/Pagination";
import PokeCard from "../pokedex/PokeCard";
import PokeName from "../pokedex/PokeName";
import PokeType from "../pokedex/PokeType";

const PokemonType = () => {
  const { type } = useParams();

  const [pokemonsType, setPokemonsType] = useState();

  const userName = useSelector(state => state.nameUser)
  const pokemonPerPage = useSelector(state => state.pokemonPerPage)

  useEffect(() => {
    const URL_TYPE = "https://pokeapi.co/api/v2/type/";
    axios
      .get(`${URL_TYPE}${type}/`)
      .then((res) => setPokemonsType(res.data.pokemon))
      .catch((err) => console.log(err));
  }, [type]);

  const [currentPage, setCurrentPage] = useState(1)

    let arrayPokemons = []

    if(pokemonsType?.length < pokemonPerPage){
        arrayPokemons = [...pokemonsType]
    }else{
        const lastPokemons = currentPage * pokemonPerPage
        arrayPokemons = pokemonsType?.slice(lastPokemons - pokemonPerPage, lastPokemons)
    }

    let arrayPages = []
    let quantityPages = Math.ceil(pokemonsType?.length / pokemonPerPage)
    const pagesPerBlock = 5
    let currentBlock = Math.ceil(currentPage / pagesPerBlock)

    if(currentBlock * pagesPerBlock >= quantityPages){
        for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages; i++){
        arrayPages.push(i)
        }
    }else{
        for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock; i++){
        arrayPages.push(i)
        }
    }

  return (
    <div className="pokedex-container">
      <div>
      <section className='subtitle-container'>
        <p className='subtitle'>Hola {userName},</p>
        <p>aqui podras encontrar tu pokemon favorito</p>
        </section>
        <section className='search-container'>
            <PokeName/>
            <NumberPagination/>
            <PokeType/>
        </section>
      </div>
      
        
      <section className='pokemon-card-container'>
        {arrayPokemons?.map((pokemon) => (
          <PokeCard key={pokemon.pokemon.url} url={pokemon.pokemon.url} />
        ))}
      </section>
      <Pagination
        arrayPages={arrayPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        quantityPages={quantityPages}/>
      
    </div>
  );
};

export default PokemonType;
