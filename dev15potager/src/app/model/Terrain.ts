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

    public toString() {
        return "id : " + this.id + " type : " + this.type + " proprietaire : " + this.proprietaire + " adresse : " + this.adresse + " description : " + this.description
        + " gps : " + this.gps + " hOuverture : " + this.hOuverture + " hFermeture : " + this.hFermeture + " maxUser : " + this.maxUser + " nom : " + this.nom
        + " surface : " + this.surface + " ville : " + this.ville;
    }
}
