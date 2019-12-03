import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Users } from 'src/app/models/user.model';
import { ConsultasService } from 'src/app/services/consultas.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formUser: FormGroup;

  constructor(
    private form: FormBuilder, 
    private consulta: ConsultasService
  ) { }

  ngOnInit() {
    this.createForm(new Users())
  }

  createForm(user: Users) {
    this.formUser = this.form.group({
      name: [user.name, Validators.required],
      razaoSocial: [user.RazaoSocial, Validators.required],
      cnpjOrCpf: [user.cnpjOrCpf, Validators.required],
      cep: [user.cep, Validators.required],
      endereco: [user.endereco, Validators.required],
      numero: [user.numero, Validators.required],
      complemento: [user.complemento, Validators.required],
      bairro: [user.bairro, Validators.required],
      cidade: [user.cidade, Validators.required],
      uf: [user.uf, Validators.required],
      telefone: [user.telefone, Validators.required],
      email: [user.email, Validators.required],
      site: [user.site, Validators.required],
      sexo: [user.sexo, Validators.required],
      nomeResponsavel: [user.nomeResponsavel, Validators.required],
      telefoneResponsavel: [user.telefoneResponsavel, Validators.required],
      emailResponsavel: [user.emailResponsavel, Validators.required],
    })
  }

  onSubmit() {
    this.consulta.post(this.formUser.value)
    this.formUser.reset(new Users());
  }

}
