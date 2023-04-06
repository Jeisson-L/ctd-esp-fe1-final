import { CharacterResults } from "../types/character.types";

export const getCharacters = async (page: number | undefined): Promise<CharacterResults[]> => {
    const response = await fetch(getApiUrlForAllCharacters(page));
    const data = await response.json();
    return data.results;
};

/**
 * Devuelve la URL para todos los personajes según la página, 
 * si no se pasa página por defecto devuelve los personajes
 * de la página 1
 * @param page numero de página
 * @returns 
 */
function getApiUrlForAllCharacters(page: number | undefined){
    if (page)
        return 'https://rickandmortyapi.com/api/character/?page='+page;
    return 'https://rickandmortyapi.com/api/character';
}