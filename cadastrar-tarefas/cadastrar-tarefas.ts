import { Component } from '@angular/core';
import { TarefaService } from '../tarefaService/tarefa-service';  
import { FormsModule } from '@angular/forms';

interface Lista{
  nome: string;
  prazo:Date;
  Status: boolean;
}

@Component({
  selector: 'app-cadastrar-tarefas',
  imports: [FormsModule],
  templateUrl: './cadastrar-tarefas.html',
  styleUrl: './cadastrar-tarefas.css',
})
export class CadastrarTarefas {
  
lista = [] as Lista[];

  novaTarefa:Lista = {
    nome: '',
    prazo: new Date(),
    Status: false
  };

  constructor(private tarefas: TarefaService) {
    this.lista = this.tarefas.listar();
  }

  adicionarTarefa(){
    this.novaTarefa = { nome:'', prazo: new Date(), Status: false }

    this.tarefas.adicionarTarefa(this.novaTarefa);
  }



  //this.Frutas = this.Frutas.filter(fruta => fruta.id !== id);
}
