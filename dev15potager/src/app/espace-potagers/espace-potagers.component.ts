import { Component, OnInit, ɵConsole, SecurityContext } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { DialogdetaildemandeComponent } from '../dialogdetaildemande/dialogdetaildemande.component';
import { ServicedemandeService } from '../servicedemande.service';
import { ModalmodifterrainComponent } from '../modalmodifterrain/modalmodifterrain.component';
import { StockageterrainService } from '../stockageterrain.service';
import { SessionuserService } from '../sessionuser.service';
import { Conversation } from '../model/Conversation';
import { Router } from '@angular/router';

import { ModalenvoieimageComponent } from '../modalenvoieimage/modalenvoieimage.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-espace-potagers',
  templateUrl: './espace-potagers.component.html',
  styleUrls: ['./espace-potagers.component.css']
})
export class EspacePotagersComponent implements OnInit {

  datapotager;
  datamembres;
  datademandes;

  constructor(private http: HttpClient, private dialog: MatDialog, private servi: ServicedemandeService, private stockageterrain: StockageterrainService, private servisession: SessionuserService, private route: Router, private sanitizer: DomSanitizer) { }
  potagerActif;
  visible = false;
  messages;
  images;
  newMessage = new Conversation();
  userConnecte = JSON.parse(localStorage.getItem('userConnecte'));
  data;
  datacod;
  datadec;
  myimg;
  image;
  im;

  ngOnInit() {

    if (JSON.parse(localStorage.getItem("userConnecte")) == null) {
      this.route.navigate(['/accueil']);
    }
    else {

      this.testProprio();

      this.potagerActif = this.stockageterrain.terrain;

      // mettre le terrain
      this.http.get('http://localhost:8086/terrains/' + this.stockageterrain.terrain.id).subscribe(response => {
        this.datapotager = response;
        console.log(this.datapotager);
      })
      this.http.get('http://localhost:8086/acceptedofterrain/' + this.stockageterrain.terrain.id).subscribe(response => {
        this.datamembres = response;
        console.log(response);
      })
      this.http.get('http://localhost:8086/requestofterrain/' + this.stockageterrain.terrain.id).subscribe(response => {
        this.datademandes = response;
        //console.log(response);
      })
      this.http.get('http://localhost:8086/messageGroupe/' + this.stockageterrain.terrain.id).subscribe(response => {
        this.messages = response;
        console.log("liste des messages")
        console.log(response)
      })
      this.http.get('http://localhost:8086/imageGroup/' + this.stockageterrain.terrain.id).subscribe(response => {
        this.images = response;
      })
    }

    this.http.get('http://localhost:8086/messageGroupe/' + this.userConnecte.id).subscribe(response => {
      this.data = response;
      console.log(this.data);

      this.http.get('http://localhost:8086/imageGroup/1').subscribe(response => {
        this.datacod = response;
        console.log(this.datacod);
      });

      const imr = this.http.get('http://localhost:8086/imageGroup/1').toPromise();

      imr.then(
        r => {
          this.datacod = r;

          console.log('img ', window.atob(this.datacod.image));
          var the_file = new Blob([window.atob(this.datacod.image)]);

          console.log('the file', the_file);

          this.im = window.URL.createObjectURL(the_file);

          console.log('the file va te fair ', this.im);

          //this.myimg = this.sanitizer.bypassSecurityTrustUrl(this.im);
          this.myimg = this.sanitizer.sanitize(SecurityContext.STYLE, 'url(' + this.im + ')');

          console.log('the file vat e fai 2', this.myimg);


          let base64data;
          console.log('my img', this.myimg);

          var reader = new FileReader();
          reader.readAsDataURL(the_file);
          reader.onloadend = function () {
            base64data = reader.result;
            console.log('image base ecf', base64data);

          };
          let mySrc;
          /*  const reader = new FileReader();
            reader.readAsDataURL(the_file);
            reader.onloadend = function (e) {
              // result includes identifier 'data:image/png;base64,' plus the base64 data
              mySrc = reader.result;
              console.log('ultime ', mySrc);
  
            };*/
          console.log('ultime bis ', this.myimg);
          //this.myimg = this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,' + base64data);
        }


      )




    });
  }


  openDemande(d) {
    this.servi.id = d.user.id;
    this.servi.nom = d.user.nom;
    this.servi.prenom = d.user.prenom;
    this.servi.mail = d.user.mail;
    this.servi.tel = d.user.tel;
    this.servi.message = d.message;
    this.servi.dateDemande = d.dateDemande;
    this.servi.user = d.user;
    const mydial2 = this.dialog.open(DialogdetaildemandeComponent, {
      height: '680px',
      width: '1400px',
    });
  }

  modifDetailTerrain() {
    const mydial2 = this.dialog.open(ModalmodifterrainComponent, {
      height: '830px',
      width: '500px',
    });
  }

  exclureUser(to_kick) {
    console.log(this.datamembres);
    this.http.delete('http://localhost:8086/del.userofterrain/' + to_kick.id + '/' + this.datapotager.id).subscribe();
    //console.log(this.datamembres);
    this.ngOnInit();
  }

  testProprio() {
    console.log("userConnecte id : " + this.userConnecte + " stockterainproprio : " + this.stockageterrain.terrain.proprietaire.id);
    if (this.userConnecte.id == this.stockageterrain.terrain.proprietaire.id) {
      this.visible = true;

    }
  }



  posterMessage() {

    this.newMessage.auteur = this.userConnecte;
    this.newMessage.terrain = this.stockageterrain.terrain;
    this.newMessage.image = null;

    const post = this.http.post('http://localhost:8086/messageGroupe/' + this.userConnecte.id + '/' + this.stockageterrain.terrain.id, this.newMessage).toPromise()
    post.then(d => { this.ngOnInit() })
    this.ngOnInit();

    this.newMessage = new Conversation();
  }

  RajoutCard() {
    const mydial2 = this.dialog.open(ModalenvoieimageComponent, {
      height: '700px',
      width: '500px',
    });




  }


}
