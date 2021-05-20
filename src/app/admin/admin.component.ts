import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private route:ActivatedRoute, private LoginService:LoginService) { }
  id:any
  dataUser : any
  nomUser:any
  prenomUser:any
  allUser:any
  ngOnInit(): void{
    this.id=this.route.snapshot.params['id'];
    this.id={value:this.id}
    this.LoginService.recept().subscribe((resultat:any)=>{
      this.allUser = resultat
      console.log('resultat.tasks')
      console.log(this.allUser)
    })
    console.log(this.id)
    this.LoginService.recevoir(this.id).subscribe((resultat)=>{
    this.dataUser=resultat
    this.nomUser=this.dataUser.nom
    this.prenomUser=this.dataUser.prenom
    console.log(resultat)

  })

  }
  /* useId:any
  supprimer(useId){
    this.useId={userId:userId}
    this.LoginService.supp(this.useId).subscribe((resultat:any)=>{
      console.log(resultat)
      location.reload()
    }
  } */
}
