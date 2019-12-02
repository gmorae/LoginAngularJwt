import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { Router } from '@angular/router';
import { ConsultasService } from './consultas.service';
import { Users } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userAuth : boolean = false
  constructor(
    private rota : Router,
  ) { }
  
  fazerLogin(user: Login, us: any) {
    console.log(user.name ,' ', us,' ', us.some(function(el){ return el.name}) === user.name);
    
    if (user.name === "a" && user.password === "1") {
      this.userAuth = true;
      this.rota.navigate(['/list'])

    } else {
      this.userAuth = false;
      alert('Usuario ou senha incorretos')
    }

  }
}
