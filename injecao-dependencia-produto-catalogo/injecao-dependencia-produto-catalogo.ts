import { Component } from '@angular/core';
import { InjecaoDependenciaProdutos } from '../injecao-dependencia-produtos/injecao-dependencia-produtos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-injecao-dependencia-produto-catalogo',
  imports: [FormsModule],
  templateUrl: './injecao-dependencia-produto-catalogo.html',
  styleUrl: './injecao-dependencia-produto-catalogo.css',
})
export class InjecaoDependenciaProdutoCatalogo {
  produtos: string[]=[];


  novoProduto = '';
  editandoLista :number | null = null;
  editandoProduto = '';


  constructor(private produtoC: InjecaoDependenciaProdutos){
    this.produtos = produtoC.listar();
  }



  adicionarProduto(){
    this.produtoC.adicionarProduto('' + this.novoProduto);
    this.novoProduto = '';
    this.produtos = this.produtoC.listar();
    return this.produtoC.listar();
    }


  alterarProduto(){
    this.produtoC.adicionarProduto(this.novoProduto);
    this.novoProduto = '';
    this.produtos = this.produtoC.listar();
  }

  removerProduto(index: number){
    this.produtoC.removerProduto(index);
    this.produtos = this.produtoC.listar();
  }


 }
