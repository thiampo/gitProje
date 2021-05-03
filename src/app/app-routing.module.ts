import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
<<<<<<< HEAD
  {path:'login',component:LoginComponent}
=======
  {path : 'login',component: LoginComponent}
>>>>>>> 19ee4532f82a56a2c3356936e5c30c65e0103a78
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
