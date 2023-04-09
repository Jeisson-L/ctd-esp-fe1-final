import { CharacterResults } from "../types/character.types";

const UrlDefault = 'https://rickandmortyapi.com/api/character'

export const getCharacters = async (url: string | undefined | null) => {
    
    const response = url ? await fetch(url) : await fetch(UrlDefault);
    
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Pagina no encontrada')
    }
};