import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-ajoutProduit',
  templateUrl: 'ajoutProduit.html'
})
export class AjoutProduitPage {

  constructor(public navCtrl: NavController) {

  }

  checkNouveauProduit: boolean = false;
  checkProduitExistant: boolean = false;

  nouveauProduit() {
    this.checkNouveauProduit = true;
  }

  produitExistant(){
    this.checkNouveauProduit = false;
    this.checkProduitExistant = true;
    console.log("scan");
  }

  ajoutNouveauProduit(){
    console.log("ajout en bdd");
  }

}
