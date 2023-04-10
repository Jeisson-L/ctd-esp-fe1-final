import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Character, CharacterInfo } from "../types/character.types"
import { findCharactersByName, getCharacters } from "../queries/character.queries"


interface initialType {
    filter: string
    characters: Character[]
    infoPages: CharacterInfo
    favorites: Character[]
    characterSelected : Character
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
    favorites: [],
    characterSelected: {
        id: 0,
        name: '',
        status: '',
        species: '',
        type: '',
        gender: '',
        origin:	{name:'', link: ''},
        location: {name:'', link: ''},
        image: '',
        episode: [],
        url: '',
        created: '',
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
        },
        actionAddFavorite: (state, action) => {
            if (!state.favorites.find(character => character.id === action.payload.id)) {
                state.favorites.push(action.payload)
            }
        },
        actionRemoveFavorite: (state, action) => {
            state.favorites = state.favorites.filter(character => character.id !== action.payload.id)            
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
            if (action.error.code == '404')
            {
                state.characters = []
            }
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

export const { actionFilter, actionAddFavorite, actionRemoveFavorite } = characterSlice.actions


export default characterSlice.reducer