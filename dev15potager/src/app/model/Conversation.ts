import { User } from './User';
import { Terrain } from './Terrain';


export class Conversation {

    id : number;
    auteur: User;
    terrain: Terrain;
    message: string;
    image: any;

    constructor() {}
}