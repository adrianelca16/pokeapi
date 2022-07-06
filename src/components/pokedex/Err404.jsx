import React from 'react'
import { useSelector } from 'react-redux'
import NumberPagination from '../NumberPagination'
import PokeName from './PokeName'
import PokeType from './PokeType'

const Err404 = () => {

    const userName = useSelector((state) => state.nameUser);
  return (
    <div className='pokedex-container'>
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
    <article className='err404-container'>
        <h1>The pokemon you are looking for does not exist</h1>
    </article>
    </div>
  )
}

export default Err404