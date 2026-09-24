import { Component } from '@angular/core';

interface Post{
  id: number;
  titulo: string;
  autor: string;
  data: Date;
  conteudo: string;
}
type Admin ={ nome: string; nivel: number};
type User = { email:String};
type AdminUser = Admin & User;

@Component({
  selector: 'app-types',
  imports: [],
  templateUrl: './types.html',
  styleUrl: './types.css',
})
export class Types {

  post: Post = {
    id: 1,
    titulo: 'meu primeiro post',
    conteudo:'Este é o conteúdo do post...',
    autor:'ana',
    data: new Date()
  }

  posts : Post[] = [
    { 
      id: 1,
      titulo: 'Angular é incrivel',
      conteudo:'Hoje vamos aprender sobre diretivas e data binding',
      autor:'Maria',
      data: new Date('2025-09-01')
    },
    {
      id: 2,
      titulo: 'TypeScript ajuda demais',
      conteudo:'A tipagem forte evita muitos erros e da mais segurança ao código',
      autor:'João',
      data: new Date('2025-09-05')
    }
  ];

  user: AdminUser = {
    nome: "Fabricio",
    nivel: 5,
    email: "fabriciotonettolondero@gmail.com"
  }

//any:compula sempre, pode quebrar em runtime
  valorAny:any = 123

  //unknown: precisa de narrowing antes de usar
  valorUknown: unknown = 'texto';

  //campo só para digitação
  entrada = '';

  setAny(){
    //pode receceber qualquer coisa
    this.valorAny = this.entrada; //string, number, etc
  }

  setUnknown(){
    //continua unknown, mas voce pode guardar qualquer coisa
    //(vanis guardar string ou number comforme a entrada)
    const n = Number(this.entrada);
    this.valorUknown = isNaN(n) ? this.entrada : n;
  }

  //narrowing seguro para unknown
  toUpperIfString(v: unknown):string | null {
    return(typeof v === 'string' ? v.toUpperCase() : null);
}

}
