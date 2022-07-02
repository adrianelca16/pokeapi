import { configureStore } from '@reduxjs/toolkit';
import nameUser from './slices/nameUser.slice';
import typePokemonSlice from './slices/typePokemon.slice';
import namePokemonSlice from './slices/namePokemon.slice';
import pokemonPerPage from './slices/pokemonPerPage.slice';

export default configureStore({
    reducer: {
        nameUser,
        typePokemonSlice,
        namePokemonSlice,
        pokemonPerPage,
    }

})