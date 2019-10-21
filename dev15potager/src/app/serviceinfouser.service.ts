import { Injectable } from '@angular/core';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class ServiceinfouserService extends User{

  constructor() {
    super()
   }

   user: User;
  


}
