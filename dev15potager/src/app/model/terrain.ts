import { User } from './User';
<<<<<<< HEAD
import { Type } from './Type';
=======
>>>>>>> 5138e574f22a08a1a4c8282aba2b399253deb616

export class Terrain{
    id: number;
    nom: String;
    gps: String;
    adresse: String;
    ville: String;
    maxUser: number;
    description: String;
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