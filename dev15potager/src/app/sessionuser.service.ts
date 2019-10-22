import { Injectable } from '@angular/core';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class SessionuserService extends User{

  constructor() {
    super()
   }

   userConnecte: User;
  


}
