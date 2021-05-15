import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FinanceComponent } from './finance/finance.component';
import { FormateurComponent } from './formateur/formateur.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ErreurSaisieComponent } from './erreur-saisie/erreur-saisie.component';
import { MotPasseEnvoyerComponent } from './mot-passe-envoyer/mot-passe-envoyer.component';
import { MotPasseOublierComponent } from './mot-passe-oublier/mot-passe-oublier.component';
import { FormulaireInscriptionComponent } from './formulaire-inscription/formulaire-inscription.component';
import { FormulaireModificationComponent } from './formulaire-modification/formulaire-modification.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EtudiantComponent,
    FinanceComponent,
    FormateurComponent,
    AdministrateurComponent,
    ErreurSaisieComponent,
    MotPasseEnvoyerComponent,
    MotPasseOublierComponent,
    FormulaireInscriptionComponent,
    FormulaireModificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
