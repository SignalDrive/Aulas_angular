import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}

@Component({
  imports: [CommonModule],
  selector: 'app-exercicio6',
  styleUrl: './exercicio6.css',
  templateUrl: './exercicio6.html',
})
export class Exercicio6 {
  produtos: Produto[] = [
    { id: 1, nome: 'Café', preco: 12.5 },
    { id: 2, nome: 'Pão', preco: 8 },
    { id: 3, nome: 'Leite', preco: 6.5 },
    { id: 4, nome: 'Chocolate', preco: 9.9 },
  ];

  carrinho: ItemCarrinho[] = [];

  adicionarAoCarrinho(produto: Produto): void {
    const itemExistente = this.carrinho.find((item) => item.produto.id === produto.id);

    if (itemExistente) {
      itemExistente.quantidade++;
      return;
    }

    this.carrinho.push({ produto, quantidade: 1 });
  }

  removerDoCarrinho(produtoId: number): void {
    this.carrinho = this.carrinho.filter((item) => item.produto.id !== produtoId);
  }

  get totalCarrinho(): number {
    return this.carrinho.reduce((total, item) => {
      return total + item.quantidade * item.produto.preco;
    }, 0);
  }

  get quantidadeTotal(): number {
    return this.carrinho.reduce((total, item) => total + item.quantidade, 0);
  }
}
