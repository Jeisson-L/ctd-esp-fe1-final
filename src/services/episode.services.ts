/**
 * Extraee eñ Id de una URL de un episedio
 * @param url 
 * @returns el id del episodio a partir de la URL
 */
export const extractEpisodeId = (url: string): string => {
    return url.split("episode")[1].replace("/","").replace("/","");
}