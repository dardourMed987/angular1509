import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { GestionPersonneComponent } from './component/gestion-personne/gestion-personne.component';
import { FooterComponent } from './component/footer/footer.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { PersonneParIdComponent } from './component/personne-par-id/personne-par-id.component';
import { FormsModule } from '@angular/forms';
import { AjouterPersonneComponent } from './component/ajouter-personne/ajouter-personne.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GestionPersonneComponent,
    FooterComponent,
    AccueilComponent,
    PersonneParIdComponent,
    AjouterPersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
