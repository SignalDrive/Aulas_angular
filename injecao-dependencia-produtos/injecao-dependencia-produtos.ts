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

}
