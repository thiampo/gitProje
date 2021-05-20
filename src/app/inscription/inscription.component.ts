import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private LoginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
  connecter(f: { value: object; }){
    console.log("hello")
    console.log(f.value)
    return this.LoginService.insc(f.value).subscribe((resultat:any)=>{
      console.log(resultat)
  })
}
}
