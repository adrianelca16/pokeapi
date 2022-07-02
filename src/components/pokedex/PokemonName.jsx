import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PokeName from "./PokeName";
import PokeType from "./PokeType";

const PokemonName = () => {
  const { name } = useParams();
  const navigate = useNavigate()

  const [namePokemon, setNamePokemon] = useState();
  const userName = useSelector((state) => state.nameUser);

  useEffect(() => {
    const URL_POKEMON_NAME = "https://pokeapi.co/api/v2/pokemon/";
    axios
      .get(`${URL_POKEMON_NAME}${name}/`)
      .then((res) => setNamePokemon(res.data))
      .catch((err) => console.log(er));
  }, []);

    const submitPokemonId = () => {
    navigate(`/pokedex/${namePokemon?.id}`)
    
  }

  const classPokemon = namePokemon?.types[0].type.name

  let classNametype
  let classNameId

  const arrType = ['grass', 'normal', 'fighting','poison', 'ground','rock','bug', 'ghost', 'steel', 'fire', 'water', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'
  ]

  for(let i = 0;i < arrType.length ;i++){
    if(classPokemon === arrType[i]){
      classNametype = arrType[i]
      classNameId= arrType[i]
    }
  }

  return (
    <div className="pokedex-container">
      <div>
        <section className="subtitle-container">
          <p className="subtitle">Hola {userName},</p>
          <p>aqui podras encontrar tu pokemon favorito</p>
        </section>
        <section className="search-container">
          <PokeName />
          <PokeType />
        </section>
      </div>

      <section className="pokemon-card-container" >
        <article className={`card-container ${classPokemon}`} onClick={submitPokemonId}>
          <img
            className="img-card"
            src={namePokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
          <div className="info-principal-pokemon">
            <h3 className="name-pokemon">{namePokemon?.name}</h3>
            <div className="type-container">
              {namePokemon?.types.map((type) => (
                <p className="type-description" key={type?.type.name}>
                  {type?.type.name}
                </p>
              ))}
            </div>
            <p className="type-p">tipo</p>
          </div>
          <div className="stats-container">
            {namePokemon?.stats.map((stat) => (
              <div key={stat.stat.name}>
                <p className="stat-name">{stat.stat.name}</p>
                <p className="stat-number">{stat.base_stat}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
};

export default PokemonName;
