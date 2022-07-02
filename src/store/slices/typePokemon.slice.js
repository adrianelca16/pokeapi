import { createSlice } from "@reduxjs/toolkit";



const typePokemonSlice = createSlice({
    name: 'typePokemon',
    initialState: '',
    reducers: {
        setTypePokemonGlobal: (state,action) => action.payload

    }
})

export const { setTypePokemonGlobal} = typePokemonSlice.actions

export default typePokemonSlice.reducer