import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Questao {
  pergunta: string;
  alternativas: string[];
  respostaCorreta: string;
}

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-exercicio3',
  styleUrl: './exercicio3.css',
  templateUrl: './exercicio3.html',
})
export class Exercicio3 {
  perguntas: Questao[] = [
    {
      pergunta: 'Qual linguagem é usada para estilizar páginas web?',
      alternativas: ['HTML', 'CSS', 'JavaScript', 'Python'],
      respostaCorreta: 'CSS',
    },
    {
      pergunta: 'Qual destes é um framework Angular?',
      alternativas: ['React', 'Vue', 'Angular', 'Laravel'],
      respostaCorreta: 'Angular',
    },
    {
      pergunta: 'Qual símbolo representa um comentário em JavaScript?',
      alternativas: ['<!-- -->', '#', '//', '<>'],
      respostaCorreta: '//',
    },
    {
      pergunta: 'Qual destes é usado para criar componentes no Angular?',
      alternativas: ['@Component', '@Injectable', '@Directive', '@Pipe'],
      respostaCorreta: '@Component',
    },
    {
      pergunta: 'Qual estrutura de dados armazena pares chave-valor?',
      alternativas: ['Array', 'Objeto', 'String', 'Boolean'],
      respostaCorreta: 'Objeto',
    },
  ];

  respostas: string[] = Array(this.perguntas.length).fill('');
  indexAtual = 0;
  pontuacao = 0;
  quizFinalizado = false;

  get perguntaAtual(): Questao {
    return this.perguntas[this.indexAtual];
  }

  get progresso(): number {
    return ((this.indexAtual + 1) / this.perguntas.length) * 100;
  }

  responder(): void {
    const resposta = this.respostas[this.indexAtual];

    if (!resposta) {
      return;
    }

    if (resposta === this.perguntaAtual.respostaCorreta) {
      this.pontuacao++;
    }

    if (this.indexAtual < this.perguntas.length - 1) {
      this.indexAtual++;
      return;
    }

    this.quizFinalizado = true;
  }

  reiniciarQuiz(): void {
    this.respostas = Array(this.perguntas.length).fill('');
    this.indexAtual = 0;
    this.pontuacao = 0;
    this.quizFinalizado = false;
  }
}
