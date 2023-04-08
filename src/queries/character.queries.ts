import { CharacterResults } from "../types/character.types";

export const getCharacters = async (page: number | undefined) => {
    const response = await fetch(getApiUrlForAllCharacters(page));
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Pagina no encontrada')
    }
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