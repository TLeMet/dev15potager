import { User } from './User';
import { Type } from './Type';


export class Terrain {

    id: number;
    nom: string;
    gps: string;
    adresse: string;
    ville: string;
    surface: number;
    hOuverture: string;
    hFermeture: string;
    maxUser: number;
    description: string;
    type: Type;
    proprietaire: User;


    constructor() {}
}
