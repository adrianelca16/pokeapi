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
    let search = data.namePokemon.toLowerCase()
    dispatch(setNamePokemonGlobal(search))
    reset({
      namePokemon: ''
    })
    navigate(`/pokedex/name/${search}`)


  }
  return (
    <form onSubmit={handleSubmit(submit)} className='form-welcome'>
        <input type="text" placeholder='Search for your favorite pokemon' {...register('namePokemon')} className='input'/>
        <button className='btn'>Search</button>
    </form>
  )
}

export default PokeName