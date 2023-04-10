import { urlBase } from "./character.queries";

const urlEpisodeDefault = urlBase + '/episode';

export const getEpisodes = async (episodeIds:string) => {
    const response = await fetch(urlEpisodeDefault + '/' + episodeIds)
    
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Pagina no encontrada')
    }
};
