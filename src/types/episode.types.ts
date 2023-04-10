import { Character } from "./character.types";

export interface episode{
    id: number;
    name:string;
    air_date:string;
    episode:string;
    characters: Character[];
    url:string;
    created:string;
}