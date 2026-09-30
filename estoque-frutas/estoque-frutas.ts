import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Frutas{
  id : number;
  Nome: string;
  Quantidade: number;
  Valor: number;
}

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-estoque-frutas',
  styleUrl: './estoque-frutas.css',
  templateUrl: './estoque-frutas.html',
})
export class EstoqueFrutas {
  Frutas: Frutas[] = [
    { id: 1, Nome: 'Banana', Quantidade: 10, Valor: 2.5 },
    { id: 2, Nome: 'Maçã', Quantidade: 4, Valor: 15 },
    { id: 3, Nome: 'Laranja', Quantidade: 3, Valor: 45 },
  ];

  novaFruta: Frutas = {
    id: 0,
    Nome: '',
    Quantidade: 1,
    Valor: 0,
  };

  adicionarFruta(): void{
    this.Frutas.push({
      id: Date.now(),
      Nome: this.novaFruta.Nome,
      Quantidade: Number(this.novaFruta.Quantidade) || 0,
      Valor: Number(this.novaFruta.Valor) || 0,
    });

    this.novaFruta = { id: 0, Nome: '', Quantidade: 1, Valor: 0 };
  }

  alterarFruta(index: number, fruta: Frutas): void{
    this.Frutas[index] = fruta;
  }

 removerFruta(id: number): void {
  this.Frutas = this.Frutas.filter(fruta => fruta.id !== id);
  }


}

