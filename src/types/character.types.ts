export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin:	CharacterLocation;
    location: CharacterLocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface CharacterLocation {
    name: string;
    link: string
}

export interface CharacterInfo{
    count: number;
    pages: number;
    next: string;
    prev: string;
}

export interface CharacterResults{
    info: CharacterInfo;
    results: Character[];
}