import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FicheProduitPage } from '../ficheProduit/ficheProduit';

@Component({
  selector: 'page-produits',
  templateUrl: 'produits.html'
})
export class ProduitsPage {

  constructor(public navCtrl: NavController) {

  }


  scan() {
    // go to fiche produit
    this.navCtrl.push(FicheProduitPage);
  }

}
