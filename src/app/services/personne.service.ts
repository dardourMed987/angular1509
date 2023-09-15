import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {


  listePersonne!:Personne[];

  constructor(private http:HttpClient) { }


  getAll()
  {

    return this.http.get<Personne[]>("http://localhost:8015/api/personnes");
    //Observable
    
  }

  getById(id:number)
  {
    let personne= new Personne();

    for(let i=0;i<this.listePersonne.length;i++)
    {
      if(this.listePersonne[i].id==id)
      {
       personne=this.listePersonne[i];
        break;
      }
    }
    return personne;
  }

  insererPersonne(personne:Personne)
  {
    this.listePersonne.push(personne);
  }

}
