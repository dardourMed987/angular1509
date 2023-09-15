import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/models/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-ajouter-personne',
  templateUrl: './ajouter-personne.component.html',
  styleUrls: ['./ajouter-personne.component.css']
})
export class AjouterPersonneComponent implements OnInit  {
  

  personne!:Personne;

constructor(private service:PersonneService,private router:Router)
{}
  


  ngOnInit(): void {
    this.personne=new Personne();
  }

  ajouter()
  {
    this.service.insererPersonne(this.personne);
    this.router.navigateByUrl('afficherPersonnes');

  }

}
