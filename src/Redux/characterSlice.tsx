import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Character, CharacterInfo } from "../types/character.types"
import { getCharacters } from "../queries/character.queries"


interface initialType {
    filter: string
    characters: Character[]
    infoPages: CharacterInfo
    error: string | undefined
}

const initialState: initialType = {
    filter: "",
    characters: [],
    infoPages: {
        count: 0,
        pages: 0,
        next: '',
        prev: ''
    },
    error: ""
}

export const getPaginatedCharacters = createAsyncThunk(
    '/getPaginatedCharacters',
    async (page: undefined | number) => {
        const response = getCharacters(page)
        return response
    }
)

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers:{
        actionFilter: (state, action) => {
            state.filter = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPaginatedCharacters.fulfilled, (state, action) => {
            state.characters = action.payload
            state.error = ""
        })
        builder.addCase(getPaginatedCharacters.rejected, (state, action) => {
            state.error = action.error.message
        })
    }
})

export const { actionFilter } = characterSlice.actions


export default characterSlice.reducer