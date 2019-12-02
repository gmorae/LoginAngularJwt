import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { Router } from '@angular/router';
import { ConsultasService } from './consultas.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userAuth : boolean = false
  constructor(
    private rota : Router,
  ) { }
  
  fazerLogin(user: Login) {
    if (user.name === 'a' && user.password === '123') {
      this.userAuth = true;
      this.rota.navigate(['/list'])

    } else {
      this.userAuth = false;
      alert('Usuario ou senha incorretos')
    }

  }
}
