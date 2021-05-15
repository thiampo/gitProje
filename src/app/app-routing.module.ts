import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FinanceComponent } from './finance/finance.component';
import { FormateurComponent } from './formateur/formateur.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { FormulaireInscriptionComponent } from './formulaire-inscription/formulaire-inscription.component';
import { FormulaireModificationComponent } from './formulaire-modification/formulaire-modification.component';
import { MotPasseOublierComponent } from './mot-passe-oublier/mot-passe-oublier.component';

const routes: Routes = [
  {path : 'login',component: LoginComponent},
  {path : 'etudiant',component: EtudiantComponent},
  {path : 'formateur',component: FormateurComponent},
  {path : 'finance',component: FinanceComponent},
  {path : 'administrateur',component: AdministrateurComponent},
  {path : 'formulaire-inscription',component: FormulaireInscriptionComponent},
  {path : 'formulaire-modification',component:   FormulaireModificationComponent},
  {path : 'mot-passe-oublier',component: MotPasseOublierComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
