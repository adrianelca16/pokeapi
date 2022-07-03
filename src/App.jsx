import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeScreen from './components/home/HomeScreen'
import PokedexScreen from './components/pokedex/PokedexScreen'
import PokeInfo from './components/pokedex/PokeInfo'
import PokemonName from './components/pokedex/PokemonName'
import ProtectedRoutes from './components/ProtectedRoutes'
import PokemonType from './components/Type/PokemonType'
import MinPokedex from './components/MinPokedex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className='header'>
        <div className='img-header'></div>
        <div className='pokeball'></div>
        <div className='pokeball-1'></div>
      </header>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>

        <Route element={<ProtectedRoutes/>}>
          <Route element={<MinPokedex/>}>
            <Route path='/pokedex' element={<PokedexScreen/>}/>
            <Route path='/pokedex/:id' element={<PokeInfo/>}/>
          </Route>
          <Route path='/pokedex/type/' >
            <Route path=':type' element={<PokemonType/>}/>
          </Route>
          <Route path='/pokedex/name/'>
            <Route path=':name' element={<PokemonName/>}/>
          </Route>
        </Route>
        
      </Routes>
    </div>
  )
}

export default App
