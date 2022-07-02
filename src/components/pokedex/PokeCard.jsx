import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PokeCard = ({ url }) => {
  const [pokemon, setPokemon] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPokemon(res.data)
      })
      .catch((err) => console.log(err));
  }, []);

  const submitPokemonId = () => {
    navigate(`/pokedex/${pokemon?.id}`);
  };

  const classPokemon = pokemon?.types[0].type.name

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
    <article onClick={submitPokemonId} className={`card-container ${classNametype}`}>
      <img
        className="img-card"
        src={pokemon?.sprites.other["official-artwork"].front_default}
        alt=""
      />
      <div className="info-principal-pokemon">
        <h3 className="name-pokemon">{pokemon?.name}</h3>
        <div className="type-container">
          {pokemon?.types.map((type) => (
            <p className="type-description" key={type?.type.name}>
              {type?.type.name}
            </p>
          ))}
        </div>
        <p className="type-p">type</p>
      </div>
      <div className="stats-container">
        {pokemon?.stats.map((stat) => (
          <div key={stat?.stat.name}>
            <p className="stat-name">{stat.stat.name}</p>
            <p className="stat-number">{stat.base_stat}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default PokeCard;
