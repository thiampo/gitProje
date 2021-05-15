<<<<<<< HEAD
import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 75209257272798ca737e3402ba19ceac5c0989b0

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  constructor(private LoginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
  connection(form){
    console.log("hello")
    console.log(form.value)
    return this.LoginService.donne(form.value).subscribe((resultat:any)=>{
      console.log(resultat)
      if(resultat.role==="financier"){
        this.router.navigate(['finance'])
      }
      else if (resultat.role==="Formateur") {
        this.router.navigate(['formateur'])
      } else if(resultat.role==="etudiant") {
        this.router.navigate(['etudiant'])
      }
      else if(resultat.role==="Admin"){
        this.router.navigate(['admin'])
      }

 })

 }

=======
  constructor() { }

  ngOnInit(): void {
  }
>>>>>>> 75209257272798ca737e3402ba19ceac5c0989b0

}
