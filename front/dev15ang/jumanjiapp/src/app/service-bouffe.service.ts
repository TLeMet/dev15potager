import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceBouffeService {

  constructor() { }


  // Retourne la date d'aujourd'hui.
  maDate(){
    return new Date();
  }
}
