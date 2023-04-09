import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Character, CharacterInfo } from "../types/character.types"
import { findCharactersByName, getCharacters } from "../queries/character.queries"


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
    async (url: undefined | string | null) => {
        const response = getCharacters(url)
        return response
    }
)

export const findCharactersByNamepag = createAsyncThunk(
    '/findCharactersByName',
    async (name: undefined | string | null) => {
        const response = findCharactersByName(name)
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
            state.characters = action.payload.results
            state.infoPages = action.payload.info
            state.error = ""
        })
        builder.addCase(getPaginatedCharacters.rejected, (state, action) => {
            state.error = action.error.message
        })
        builder.addCase(findCharactersByNamepag.fulfilled, (state, action) => {
            state.characters = action.payload.results
            state.infoPages = action.payload.info
            state.error = ""
        })
        builder.addCase(findCharactersByNamepag.rejected, (state, action) => {
            state.error = action.error.message
        })
    }
})

export const { actionFilter } = characterSlice.actions


export default characterSlice.reducer