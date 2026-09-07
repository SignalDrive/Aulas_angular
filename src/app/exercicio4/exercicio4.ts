import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ItemLista {
  id: number;
  nome: string;
  editando: boolean;
}

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-exercicio4',
  styleUrl: './exercicio4.css',
  templateUrl: './exercicio4.html',
})
export class Exercicio4 {
  itens: ItemLista[] = [
    { id: 1, nome: 'Maçã', editando: false },
    { id: 2, nome: 'Pão', editando: false },
    { id: 3, nome: 'Leite', editando: false },
  ];

  novoItem = '';

  adicionarItem(): void {
    const nome = this.novoItem.trim();

    if (!nome) {
      return;
    }

    this.itens.push({
      id: Date.now(),
      nome,
      editando: false,
    });

    this.novoItem = '';
  }

  removerItem(id: number): void {
    this.itens = this.itens.filter((item) => item.id !== id);
  }

  iniciarEdicao(item: ItemLista): void {
    this.itens = this.itens.map((i) => ({
      ...i,
      editando: i.id === item.id ? true : false,
    }));
  }

  salvarEdicao(item: ItemLista): void {
    const nome = item.nome.trim();

    if (!nome) {
      return;
    }

    this.itens = this.itens.map((i) =>
      i.id === item.id ? { ...i, nome, editando: false } : i
    );
  }
}
