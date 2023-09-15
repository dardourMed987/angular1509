import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/models/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-gestion-personne',
  templateUrl: './gestion-personne.component.html',
  styleUrls: ['./gestion-personne.component.css']
})
export class GestionPersonneComponent implements OnInit {
 

  listePersonne!:Personne[];

  //@Input() messagechild!:string;

  constructor(private pservice:PersonneService,private router:Router)
  {

  }


  ngOnInit(): void {

   //this.listePersonne=this.pservice.getAll();
   this.afficherAll();
  }

  incrementerAge(id:number)
  {

    for(let i=0;i<this.listePersonne.length;i++)
    {
      if(this.listePersonne[i].id==id)
      {
        this.listePersonne[i].age++;
        break;
      }
    }

  }

  afficher(id:number)
  {
    this.router.navigateByUrl(`afficherPersonneParid/${id}`);
  }

  afficherAll()
  {
    this.pservice.getAll().subscribe(
      re=>{
        this.listePersonne=re
      },
      err=>
      {
        console.log("erreur")
      }
      
      
    )
  }

}
