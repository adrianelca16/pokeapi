import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PokeInfo = () => {
  const {id} = useParams()
  const [pokemonInfo, setPokemonInfo] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const URL_POKEMON_ID = 'https://pokeapi.co/api/v2/pokemon/'
    axios.get(`${URL_POKEMON_ID}${id}/`)
    .then(res => setPokemonInfo(res.data))
    .catch(err => console.log(err))
  }, [])

  const goHome = () => {
    navigate('/pokedex')
  }

  const classPokemon = pokemonInfo?.types[0].type.name

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
    <section className='poke-info-container'>
      <button className='btn btn-poke-info' onClick={goHome}>Go to Pokedex</button>
      <article className={`poke-info-principal ${classPokemon}`}>
        <div className={`img-container ${classNameId}-id`}>
          <img className='img-info' src={pokemonInfo?.sprites.other['official-artwork'].front_default} alt="" />
        </div>
        
        <p className='id-info'># {pokemonInfo?.id}</p>
        <p className='name-info'>{pokemonInfo?.name}</p>
        <div className='secundary-container-info'>
          <div className='date-container-info'>
            <p className='subtitle-date-info'>Peso</p>
            <p className='date-info'>{pokemonInfo?.weight}</p>
          </div>
          <div className='date-container-info'>
            <p className='subtitle-date-info'>Altura</p>
            <p className='date-info'>{pokemonInfo?.height}</p>
          </div>
        </div>
        <div className='container-info-secundary-principal'>
          <div className='container-info-secundary'>
            <p className='subtitle-info-secundary'>Tipo</p>
            <div className='container-infomation-secundary'>
              {
                pokemonInfo?.types.map(type => (
                  <p className={`type-info ${type.type.name}-id`} key={type.type.name}>{type.type.name}</p>
                ))
              }
            </div>
            
          </div>
          <div className='container-info-secundary'>
            <p className='subtitle-info-secundary'>Habilidades</p>
            <div className='container-infomation-secundary'>
              {
                pokemonInfo?.abilities.map(ability => (
                  <p className='type-info' key={ability.ability.name}>{ability.ability.name}</p>
                ))
              }
            </div>
          </div>
        </div>
        
        <div className='stat-container'>
          <h3 className='subtitle-stat'>Stast</h3>
          <div className='stat-info-container'>
          {
            pokemonInfo?.stats.map(stat => (
              <div  key={stat.stat.name}>
                <div className='info-stat'>
                  <p className='stat-description'>{stat.stat.name}</p>
                  <p className='number-stat'>{stat.base_stat}/150</p>
                </div>
                <div className='stat-info-percentage-container'>
                  <div className='stat-info-percentage' style={{width: `${(100*stat.base_stat)/150}%`}}></div>
                </div>
              
              </div>
            ))
          }
        </div>

        </div>

      </article>
      <article className='movements-containers'>
        <h3 className='subtitle-stat'>movimientos</h3>
        <div className='movement-info-container'>
        {
          pokemonInfo?.moves.map(move => (
            <p className='movement' key={move.move.name}>{move.move.name}</p>
          ))
        }
        </div>
      </article>
      
    </section>
  )
}

export default PokeInfo