import { CharacterDTO, instanceOfCharacterDTO } from "../character";

export class InfoCardModel implements InfoCardDTO{
    public imageUrl?: string;
    public title: string;
    public dataFields?: DataFieldModel[];
    public redirectUrl?: string;

    public constructor (
        value: InfoCardDTO
    ) {
        this.imageUrl = value.imageUrl;
        this.title = value.title;
        this.dataFields = value.dataFields;
        this.redirectUrl = value.redirectUrl;
    }
}

export interface InfoCardDTO {
    imageUrl?: string;
    title: string;
    dataFields?: DataFieldModel[];
    redirectUrl?: string;
}

export interface DataFieldModel {
    id: string;
    subtitle?: string;
    text?: string;
}