export class Users {
    // usuario comun
    id: number;
    imgPerfil: string;
    createdAt: Date = new Date();
    name: string;
    password: string;
    RazaoSocial: string;
    cnpjOrCpf: number;
    cep: number;
    endereco: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    telefone: number;
    email: string;
    site: string;
    sexo: string;
    upload: string;

    // responsavel
    nomeResponsavel: string;
    telefoneResponsavel: string;
    emailResponsavel: string
}