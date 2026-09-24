import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type itemCarrinho = {
  nome: string;
  quantidade: number;
  precos: number;
}

type carrinho = itemCarrinho[];

@Component({
  selector: 'app-carrinho-de-compras',
  imports: [FormsModule],
  templateUrl: './carrinho-de-compras.html',
  styleUrl: './carrinho-de-compras.css',
})
export class CarrinhoDeCompras {

  carrinho: carrinho = [];
  novoItem: itemCarrinho = { nome: '', quantidade: 0, precos: 0 };

  adicionarItem(item: itemCarrinho) {
    this.carrinho.push(item);
    this.novoItem = { nome: '', quantidade: 0, precos: 0 };


  }

  removerItem(nome: string):void {
    this.carrinho = this.carrinho.filter((item) => item.nome !== nome);
  }
}
