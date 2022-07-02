import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPokemonPerPage } from '../store/slices/pokemonPerPage.slice'

const NumberPagination = () => {

    const pokemonPerPage = useSelector(state => state.pokemonPerPage)

    const dispatch = useDispatch()

  return (
    <form className='pagination-container'>
      <label htmlFor="pagination" className='label-pagination'>Number of pokemon per page</label>
        <input id='pagination' className='select-pagination' type="text" value={pokemonPerPage} onChange={e => dispatch(setPokemonPerPage(e.target.value))}/>
    </form>
  )
}

export default NumberPagination 