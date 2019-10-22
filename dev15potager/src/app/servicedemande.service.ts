import { Injectable } from '@angular/core';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class ServicedemandeService {

  constructor() {
   }

  id: number;
  nom: String;
  prenom: String;
  mail: String;
  tel : String;
  message: String;
  dateDemande : String;
  user: User;

}