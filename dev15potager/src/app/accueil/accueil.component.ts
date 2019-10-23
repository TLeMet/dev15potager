import { Component, OnInit } from '@angular/core';
import { SessionuserService } from '../sessionuser.service';

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  userConnecte;
  isConnected = 0;

  constructor(private servisession: SessionuserService) { }

  estConnecte(){
    if(this.isConnected == 1){
      return true;
    }
    else{
      return false;
    }
  }

  ngOnInit() {
    console.log("ngOnInit de accueil");
    
    if(JSON.parse(localStorage.getItem("userConnecte")) != null){
      this.isConnected = 1;
    }
    else{
      this.isConnected = 0;
    }
  }

}
