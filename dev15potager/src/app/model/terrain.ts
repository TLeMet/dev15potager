import { User } from './User';

export class Terrain {
    id: number;
    nom: string;
    gps: string;
    adresse: string;
    ville: string;
    maxUser: number;
    description: string;
    proprietaire: User;

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