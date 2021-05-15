import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  constructor(private router:Router) { }
  goTopage(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }


  ngOnInit(): void {
  }



}
