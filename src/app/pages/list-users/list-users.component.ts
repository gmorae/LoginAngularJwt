import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  user : Users[] = []
  UserRetorno : Subscription
  constructor(
    private consulta : ConsultasService
  ) { }

  ngOnInit() {
    this.consulta.get()
    this.UserRetorno = this.consulta.pegaRetorno$.subscribe(() => {
      this.user = this.consulta.user
    })       
  }
}
