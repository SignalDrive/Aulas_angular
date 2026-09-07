import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Pessoa {
  nome: string;
  idade: number;
  cidade: string;
}

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-exercicio7',
  styleUrl: './exercicio7.css',
  templateUrl: './exercicio7.html',
})
export class Exercicio7 {
  filtroNome = '';
  criterioOrdenacao: 'nome' | 'idade' = 'nome';

  pessoas: Pessoa[] = [
    { nome: 'Ana', idade: 22, cidade: 'São Paulo' },
    { nome: 'Carlos', idade: 31, cidade: 'Rio de Janeiro' },
    { nome: 'Beatriz', idade: 27, cidade: 'Belo Horizonte' },
    { nome: 'Diego', idade: 19, cidade: 'Curitiba' },
    { nome: 'Elaine', idade: 35, cidade: 'Porto Alegre' },
  ];

  get pessoasFiltradas(): Pessoa[] {
    const filtro = this.filtroNome.trim().toLowerCase();

    const listaFiltrada = this.pessoas.filter((pessoa) =>
      pessoa.nome.toLowerCase().includes(filtro)
    );

    return listaFiltrada.sort((a, b) => {
      if (this.criterioOrdenacao === 'nome') {
        return a.nome.localeCompare(b.nome);
      }

      return a.idade - b.idade;
    });
  }

  ordenarPorNome(): void {
    this.criterioOrdenacao = 'nome';
  }

  ordenarPorIdade(): void {
    this.criterioOrdenacao = 'idade';
  }
}
