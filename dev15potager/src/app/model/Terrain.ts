import { User } from './User';
import { Type } from './Type';

export class Terrain {

    id: number;
    nom: string;
    postal: string;
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

    public toString() {
        return "id : " + this.id + " type : " + this.type + " proprietaire : " + this.proprietaire + " adresse : " + this.adresse + " description : " + this.description
        + " Code postal : " + this.postal + " hOuverture : " + this.hOuverture + " hFermeture : " + this.hFermeture + " maxUser : " + this.maxUser + " nom : " + this.nom
        + " surface : " + this.surface + " ville : " + this.ville;
    }
}
