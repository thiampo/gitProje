import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private webRequestService:WebRequestService) { }

donne(donne:object){
return this.webRequestService.post('api/users/login',donne)
}
list(donne:object){
  return this.webRequestService.post('api/users/login',donne)
}

 insc(donnes:object){
  return this.webRequestService.post('api/users/register',donnes)
}
recevoir(donne:object){
  return this.webRequestService.get('api/users/me',donne)
}
recept(){
  return this.webRequestService.avoir('api/users/all')
}
supp(donne:object){
  return this.webRequestService.post('supprimer',donne)
}
}
