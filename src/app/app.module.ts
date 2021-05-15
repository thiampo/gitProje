
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from "@angular/common/http";
//import {Router} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';



import { LoginComponent } from './login/login.component';
import {AdminComponent} from './admin/admin.component'
import { ErreurSaisieComponent } from './erreur-saisie/erreur-saisie.component';
import { EtudiantComponent } from   './etudiant/etudiant.component'
import { FinanceComponent } from   './finance/finance.component';
import { FormateurComponent } from   './formateur/formateur.component'
import {InscriptionComponent} from './inscription/inscription.component'
import { MotPasseEnvoyerComponent } from './mot-passe-envoyer/mot-passe-envoyer.component';
import {MotPasseOublierComponent} from './mot-passe-oublier/mot-passe-oublier.component'
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ModificationComponent } from './modification/modification.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AppComponent,

    AdminComponent,
    ErreurSaisieComponent,
    EtudiantComponent,
    FinanceComponent,
    FormateurComponent,

    MotPasseEnvoyerComponent,

    MotPasseOublierComponent,
    LoginComponent,
    InscriptionComponent,
    RegisterComponent,
    ModificationComponent,



  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
