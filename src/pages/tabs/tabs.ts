import { Component } from '@angular/core';

import { AjoutProduitPage } from '../ajoutProduit/ajoutProduit';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AjoutProduitPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
