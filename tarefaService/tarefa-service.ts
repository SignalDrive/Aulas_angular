import { Injectable } from '@angular/core';

interface Lista{
  nome: string;
  prazo:Date;
  Status: boolean;
}


@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private tarefas: Lista[] = [
    { nome: 'limpar moveis', prazo: new Date(), Status: false },
    { nome: 'varrer a casa', prazo: new Date(), Status: false },
    { nome: 'lavar a louça', prazo: new Date(), Status: false }
  ];



  listar(): Lista[]{
    return this.tarefas;
  };

  adicionarTarefa( novaTarefa:Lista):void{
    this.tarefas.push(novaTarefa);
    //this.novaTarefa = { nome:'', prazo: new Date(), Status: false }
  };

  removerTarefa(nome: string){
    this.tarefas = this.tarefas.filter(tarefa => tarefa.nome !== nome);
    return this.listar();
  };

  PrazoTarefa(){
    this.tarefas[1].prazo = new Date('21/10/2026');
    return this.listar();

  };

  StatusTarefa(){
    if( this.tarefas[2].Status === true ){
      return true;
    }
    return false;
  };
}
