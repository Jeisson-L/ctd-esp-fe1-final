export const extractEpisodeId = (url: string): string => {
    return url.split("episode")[1].replace("/","").replace("/","");
}