import { createSlice } from "@reduxjs/toolkit";



const pokemonPerPageSlice = createSlice({
    name: 'pokemonPerPage',
    initialState: '6',
    reducers: {
        setPokemonPerPage: (state,action) => action.payload

    }
})

export const { setPokemonPerPage } = pokemonPerPageSlice.actions

export default pokemonPerPageSlice.reducer