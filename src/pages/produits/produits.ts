import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FicheProduitPage } from '../ficheProduit/ficheProduit';
import { ProduitsService } from '../../services/produits.service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-produits',
  templateUrl: 'produits.html',
  providers: [ProduitsService]
})

export class ProduitsPage implements OnInit {

  produits: any[];

  constructor(public navCtrl: NavController, private produitsService: ProduitsService, public alertCtrl: AlertController) {

  }

  ngOnInit() {
    this.produitsService.getProduits().subscribe(
      data => this.produits = data,
      data => this.problemeConnexion()
    );
  }

  problemeConnexion() {
    let alert = this.alertCtrl.create({
      title: 'Problème de connexion',
      subTitle: 'Veuillez revenir plus tard !',
      buttons: ['OK']
    });
    alert.present();
  }

  scan() {
    // go to fiche produit
    this.navCtrl.push(FicheProduitPage);
  }

}
