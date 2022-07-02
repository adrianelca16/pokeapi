import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNamePokemonGlobal } from '../../store/slices/namePokemon.slice'

const PokeName = () => {

  const {handleSubmit,register,reset} = useForm()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const submit = data => {
    dispatch(setNamePokemonGlobal(data.namePokemon))
    reset({
      namePokemon: ''
    })
    navigate(`/pokedex/name/${data.namePokemon}`)


  }
  return (
    <form onSubmit={handleSubmit(submit)} className='form-welcome'>
        <input type="text" placeholder='Pokemon searh' {...register('namePokemon')} className='input'/>
        <button className='btn'>Search</button>
    </form>
  )
}

export default PokeName