import { MotPasseOublierComponent } from './mot-passe-oublier/mot-passe-oublier.component';
import { ErreurSaisieComponent } from './erreur-saisie/erreur-saisie.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {EtudiantComponent} from './etudiant/etudiant.component'
import {  FormateurComponent}  from './formateur/formateur.component'
import { FinanceComponent } from './finance/finance.component';


//import { FormulaireComponent } from './formulaire/formulaire.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'etudiant',component:EtudiantComponent},
  {path:'formateur',component:FormateurComponent},
  {path:'finance',component:FinanceComponent},
 {path:'admin',component:AdminComponent},
 {path:'ErreurSaisie',component:ErreurSaisieComponent},
 {path:'MotPasseOublier',component:MotPasseOublierComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
