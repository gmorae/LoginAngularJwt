import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  private user : Login = new Login();
  constructor(
    private auth : AuthService,
  ) { }

  ngOnInit() { 
  }

  fazerLogin(){
    console.log(this.user);
    this.auth.fazerLogin(this.user)
  }
  
  
}
