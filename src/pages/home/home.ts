import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FicheProduitPage } from '../ficheProduit/ficheProduit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  scan() {
    // go to fiche produit
    this.navCtrl.push(FicheProduitPage);
  }

}
