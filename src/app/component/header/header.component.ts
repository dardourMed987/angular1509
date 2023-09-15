import { Component,Output,EventEmitter,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit {

  constructor(private router:Router)
  {}
  


  @Output() chaineEvenement= new EventEmitter<string>();

  ngOnInit(): void {

    console.log(this.router.url)
    this.chaineEvenement.emit("message depuis le composant child");
  }

  

}
