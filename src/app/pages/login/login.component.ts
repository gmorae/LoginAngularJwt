import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';
import { ConsultasService } from 'src/app/services/consultas.service';
import { Subscription } from 'rxjs';
import { Users } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: Login = new Login();
  public us: Users[]
  UserRetorno: Subscription
  constructor(
    private auth: AuthService,
    private consulta: ConsultasService
  ) { }

  ngOnInit() {
    this.consulta.get()
    this.UserRetorno = this.consulta.pegaRetorno$.subscribe(() => {
      this.us = this.consulta.user
      console.log(this.us);
    })
    
  }

  fazerLogin() {
    console.log(this.user);
    this.auth.fazerLogin(this.user, this.us)
  }


}
