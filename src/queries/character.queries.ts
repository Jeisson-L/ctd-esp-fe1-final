export const urlBase = 'https://rickandmortyapi.com/api';
const urlCharacterDefault = urlBase + '/character';

export const getCharacters = async (url: string | undefined | null) => {
    
    const response = url ? await fetch(url) : await fetch(urlCharacterDefault);
    
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Pagina no encontrada')
    }
};

export const findCharactersByName = async (name: string | undefined | null) => {
    const urlFindByName = name ? urlCharacterDefault + '/?name=' + name : urlCharacterDefault + '/?name='
    const response = await fetch(urlFindByName);
    
    if (response.ok) {
        const data = await response.json(); 
        return data;
    } else if (response.status === 404){
        console.log (response)
        return {
            info: {
                count: 0,
                pages: 0,
                next: null,
                prev: null
            },
            results: [],
        }
    }

    throw new Error('Pagina no encontrada')
};