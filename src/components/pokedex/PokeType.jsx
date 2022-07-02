import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTypePokemonGlobal } from '../../store/slices/typePokemon.slice'

const PokeType = () => {

    const [typePokemons, setTypePokemons] = useState()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/')
        .then(res => setTypePokemons(res.data.results))
        .catch(err => console.log(err) )
    }, [])

    const submitType = (type) => {
        dispatch(setTypePokemonGlobal(type))
        navigate(`/pokedex/type/${type}`)
    }

    const submitHome = () => {
        navigate('/pokedex')
    }

    
  return (
    <form >
         <select className='select-type'>
            <option onClick={submitHome} >All pokemon</option>
            {
                typePokemons?.map(typePokemon => (
                    <option 
                    value={typePokemon.name}
                    key={typePokemon.url} 
                    onClick={()=> submitType(typePokemon.name)}
                    >{typePokemon.name}
                    </option>
                
                ))
            }
        </select>

    </form>
   
  )
}

export default PokeType