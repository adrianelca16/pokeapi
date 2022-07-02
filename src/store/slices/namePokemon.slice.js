import { createSlice } from "@reduxjs/toolkit";



const namePokemonSlice = createSlice({
    name: 'namePokemon',
    initialState: '',
    reducers: {
        setNamePokemonGlobal: (state,action) => action.payload

    }
})

export const { setNamePokemonGlobal} = namePokemonSlice.actions

export default namePokemonSlice.reducer