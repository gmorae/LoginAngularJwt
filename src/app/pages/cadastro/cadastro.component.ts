import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, MaxLengthValidator } from '@angular/forms';
import { Users } from 'src/app/models/user.model';
import { ConsultasService } from 'src/app/services/consultas.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formUser: FormGroup;
  user: Users = new Users()
  constructor(
    private form: FormBuilder, 
    private consulta: ConsultasService
  ) { }

  ngOnInit() {
    this.createForm(new Users())
  }

  createForm(user: Users) {
    this.formUser = this.form.group({

      imgPerfil:            [null, Validators.required],
      name:                 [null, Validators.required],
      razaoSocial:          [null, Validators.required],
      cnpjOrCpf:            [null, [Validators.required, Validators.maxLength(12)]],
      cep:                  [null, Validators.required],
      endereco:             [null, Validators.required],
      numero:               [null, Validators.required],
      complemento:          [null, Validators.required],
      bairro:               [null, Validators.required],
      cidade:               [null, Validators.required],
      uf:                   [null, Validators.required],
      telefone:             [null, Validators.required],
      email:                [null, [Validators.required, Validators.email]],
      site:                 [null, Validators.required],
      sexo:                 [null, Validators.required],
      upload:               [null, Validators.required],
      nomeResponsavel:      [null, Validators.required],
      telefoneResponsavel:  [null, Validators.required],
      emailResponsavel:     [null, Validators.required],     
      
    })
  }
  
  onSubmit() {
    this.user = this.formUser.value    
    this.consulta.post(this.user)
    this.formUser.reset(new Users());
  }

}
