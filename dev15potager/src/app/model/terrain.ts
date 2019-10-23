import { User } from './User';
import { Type } from './Type';

export class Terrain{
    id: number;
    nom: String;
    gps: String;
    adresse: String;
    ville: String;
    maxUser: number;
    description: String;
    proprietaire: User;
    surface: number;
    hOuverture: String;
    hFermeture: String;
    type: Type;

    constructor() {}
/*
    public get getId() : number {
        return this.id;
    }

    public set setId(id : number) {
        this.id = id;
    }
    */
}