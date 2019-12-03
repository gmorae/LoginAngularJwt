import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Subject } from "rxjs";
import { ApiService } from './api.service';
import { Users } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  public user: any;
  public pegaRetorno$: Subject<any> = new Subject<any>();

  constructor(
    public api: ApiService
  ) { }

  get() {
    this.api.listUser().subscribe(
      (user: Users[]) => {
        this.user = user
        this.pegaRetorno$.next(true)
      }
    )
  }

  post(body: Users) {
    this.api.post(body).subscribe(() => {
      console.log("sucesso");
    }, err => {
      console.log("erro");
    })
  }
}
