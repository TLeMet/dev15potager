import { User } from './User';
import { Type } from './Type';


export class Terrain {

    id: number;
    type: Type;
    proprietaire: User;
    adresse: string;
    description: string;
    gps: string;
    hOuverture: string;
    hFermeture: string;
    maxUser: number;
    nom: string;
    surface: number;
    ville: string;


    constructor() {}
}
