import { Component } from '@angular/core';

import { AjoutProduitPage } from '../ajoutProduit/ajoutProduit';
import { ContactPage } from '../contact/contact';
import { ProduitsPage } from '../produits/produits';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProduitsPage;
  tab2Root = AjoutProduitPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
