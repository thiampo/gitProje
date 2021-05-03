import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from "@angular/common/http";

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

import { LoginComponent } from './login/login.component';
import {AdminComponent}  from './admin/admin.component';
import { ErreurSaisieComponent } from './erreur-saisie/erreur-saisie.component';
import { EtudiantComponent } from   './etudiant/etudiant.component'
import { FinanceComponent } from   './finance/finance.component';
import { FormateurComponent } from   './formateur/formateur.component'
import { IncriptionComponent } from   './incription/incription.component'
import { MotPasseEnvoyerComponent } from './mot-passe-envoyer/mot-passe-envoyer.component';
import {MotPasseOblierComponent} from './mot-passe-oblier/mot-passe-oblier.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD


=======
    EtudiantComponent,
    FinanceComponent,
    FormateurComponent,
    AdministrateurComponent,
    ErreurSaisieComponent,
    MotPasseEnvoyerComponent,
    MotPasseOublierComponent
>>>>>>> 19ee4532f82a56a2c3356936e5c30c65e0103a78
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    MatIconModule,
    HttpClientModule,
    AdminComponent,
    ErreurSaisieComponent,
    EtudiantComponent,
    FinanceComponent,
    FormateurComponent,
    IncriptionComponent,
    MotPasseEnvoyerComponent,
    MotPasseOblierComponent

=======
    MatIconModule
    
>>>>>>> 19ee4532f82a56a2c3356936e5c30c65e0103a78

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
