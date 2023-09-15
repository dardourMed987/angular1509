import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personne } from 'src/app/models/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne-par-id',
  templateUrl: './personne-par-id.component.html',
  styleUrls: ['./personne-par-id.component.css']
})
export class PersonneParIdComponent implements OnInit {


  personne!:Personne;


  constructor(private route:ActivatedRoute,private service:PersonneService)
  {

  }


  ngOnInit(): void {
   let id=+this.route.snapshot.params['id'];

   this.personne= this.service.getById(id);
  }



}
