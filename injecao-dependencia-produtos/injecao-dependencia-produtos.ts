import { Component,Injectable } from '@angular/core';

@Component({
  selector: 'app-injecao-dependencia-produtos',
  imports: [],
  templateUrl: './injecao-dependencia-produtos.html',
  styleUrl: './injecao-dependencia-produtos.css',
})

@Injectable({ providedIn: 'root'})
export class InjecaoDependenciaProdutos {
  produtos = ['teclado','Mouse','Monitor'];
  listar(){ return this.produtos}

  adicionarProduto(produto: string){
    if(produto && produto.trim())
    {this.produtos.push(produto.trim());
    }
  }

  alterarProduto(index: number, novoNome: string){
    if(index >= 0 && index < this.produtos.length && novoNome && novoNome.trim()){
      this.produtos[index] = novoNome.trim();
    }
  }

  removerProduto(index: number){
    if(index >= 0 && index < this.produtos.length){
      this.produtos.splice(index,1);
    }
  }

}
