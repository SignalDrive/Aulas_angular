import { Component } from '@angular/core';
import { InjecaoDependenciaProdutos } from '../injecao-dependencia-produtos/injecao-dependencia-produtos';

@Component({
  selector: 'app-injecao-dependencia-produto-catalogo',
  imports: [],
  templateUrl: './injecao-dependencia-produto-catalogo.html',
  styleUrl: './injecao-dependencia-produto-catalogo.css',
})
export class InjecaoDependenciaProdutoCatalogo {
  produtos: string[]=[];
  constructor(private produtoC: InjecaoDependenciaProdutos){
    this.produtos = produtoC.listar();
  }

  adicionarProduto(){
    
  }
}
