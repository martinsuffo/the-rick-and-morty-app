export interface CharacterDTO {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: CharacterLocationInfoDTO,
    location: CharacterLocationInfoDTO,
    image: string,
    episode: string[],
    url: string,
    created: string
}

export function instanceOfCharacterDTO(object: any): object is CharacterDTO {
    if (!('id' in object)) {
        console.log("falta");
        return false;
    }
    if (!('name' in object)) {
        console.log("falta");
        return false;
    }
    if (!('status' in object)) {
        console.log("falta");
        return false;
    }
    if (!('species' in object)) {
        console.log("falta");
        return false;
    }
    if (!('type' in object)) {
        console.log("falta");
        return false;
    }
    if (!('gender' in object)) {
        console.log("falta");
        return false;
    }
    if (!('origin' in object)) {
        console.log("falta");
        return false;
    }
    if (!('location' in object)) {
        console.log("falta");
        return false;
    }
    if (!('episode' in object)) {
        console.log("falta");
        return false;
    }
    if (!('url' in object)) {
        console.log("falta");
        return false;
    }
    if (!('created' in object)) {
        console.log("falta");
        return false;
    }
    return true;
}

export interface CharacterLocationInfoDTO {
    name: string;
    url: string;
}