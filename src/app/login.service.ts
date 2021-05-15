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

insc(donne:object){
  return this.webRequestService.post('api/users/register',donne)
  }
}
