import { createSlice } from "@reduxjs/toolkit";



const nameUSerSlice = createSlice({
    name: 'nameUser',
    initialState: '',
    reducers: {
        setNameGlobal: (state,action) => action.payload

    }
})

export const { setNameGlobal} = nameUSerSlice.actions

export default nameUSerSlice.reducer