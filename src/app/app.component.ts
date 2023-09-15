import { OnInit,Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
messageParent!:string;

constructor(private router:Router)
{}


ngOnInit(): void {
  console.log(this.router.url)
  this.messageParent="message depuis le composant parent";
}

afficherMessage(message :string)
{
  console.log(message)
}


}
