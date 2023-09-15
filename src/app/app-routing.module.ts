import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './component/accueil/accueil.component';
import { GestionPersonneComponent } from './component/gestion-personne/gestion-personne.component';
import { PersonneParIdComponent } from './component/personne-par-id/personne-par-id.component';
import { AjouterPersonneComponent } from './component/ajouter-personne/ajouter-personne.component';

const routes: Routes = [
  {path:'afficherPersonneParid/:id',component:PersonneParIdComponent},
  {path:'',component:AccueilComponent},
  {path:'ajouter',component:AjouterPersonneComponent},
  {path:'afficherPersonnes',component:GestionPersonneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
