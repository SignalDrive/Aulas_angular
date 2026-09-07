import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-exercicio5',
  styleUrl: './exercicio5.css',
  templateUrl: './exercicio5.html',
})
export class Exercicio5 {
  email = '';
  senha = '';
  logado = false;

  get emailValido(): boolean {
    return this.email.includes('@') && this.email.includes('.') && this.email.length > 5;
  }

  get senhaValida(): boolean {
    return this.senha.length >= 6;
  }

  get formularioValido(): boolean {
    return this.emailValido && this.senhaValida;
  }

  fazerLogin(): void {
    if (!this.formularioValido) {
      return;
    }

    this.logado = true;
  }

  logout(): void {
    this.logado = false;
    this.email = '';
    this.senha = '';
  }
}
