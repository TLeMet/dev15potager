export class User{
    id: number;
    nom: string;
    prenom: string;
    mail: string;
    age: number;

    constructor(

    ) {}

    public get getId() : number {
        return this.id;
    }

    public set setId(id : number) {
        this.id = id;
    }
    
}