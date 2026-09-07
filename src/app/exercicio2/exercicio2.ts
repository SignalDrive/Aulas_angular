import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Produto {
  nome: string;
  quantidade: number;
  preco: number;
}

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-exercicio2',
  styleUrl: './exercicio2.css',
  templateUrl: './exercicio2.html',
})
export class Exercicio2 {
  produtos: Produto[] = [
    { nome: 'Caneta', quantidade: 10, preco: 2.5 },
    { nome: 'Caderno', quantidade: 4, preco: 15 },
    { nome: 'Mouse', quantidade: 3, preco: 45 },
  ];

  novoProduto: Produto = {
    nome: '',
    quantidade: 1,
    preco: 0,
  };

  adicionarProduto(): void {
    const nome = this.novoProduto.nome.trim();

    if (!nome) {
      return;
    }

    this.produtos.push({
      nome,
      quantidade: Number(this.novoProduto.quantidade) || 0,
      preco: Number(this.novoProduto.preco) || 0,
    });

    this.novoProduto = { nome: '', quantidade: 1, preco: 0 };
  }

  removerProduto(index: number): void {
    this.produtos.splice(index, 1);
  }

  get valorTotalEstoque(): number {
    return this.produtos.reduce((total, produto) => {
      return total + produto.quantidade * produto.preco;
    }, 0);
  }
}
