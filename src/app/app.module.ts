import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AjoutProduitPage } from '../pages/ajoutProduit/ajoutProduit';
import { ContactPage } from '../pages/contact/contact';
import { ProduitsPage } from '../pages/produits/produits';
import { FicheProduitPage } from '../pages/ficheProduit/ficheProduit';
import { TabsPage } from '../pages/tabs/tabs';

import { ProduitsService } from '../services/produits.service';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AjoutProduitPage,
    FicheProduitPage,
    ContactPage,
    ProduitsPage,
    TabsPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AjoutProduitPage,
    FicheProduitPage,
    ContactPage,
    ProduitsPage,
    TabsPage
  ],
  providers: [
    ProduitsService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
