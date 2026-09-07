import { Routes } from '@angular/router';
import { Componente1 } from './componente1/componente1';
import { Component } from '@angular/core';
import { Exemplo1 } from './exemplo1/exemplo1';
import { Exemplo2 } from './exemplo2/exemplo2';
import { Exemplo3 } from './exemplo3/exemplo3';
import { Exemplo4 } from './exemplo4/exemplo4';
import { Exemplo5,} from './exemplo5/exemplo5';
import { Exemplo6 } from './exemplo6/exemplo6';
import { Exemplo7 } from './exemplo7/exemplo7';
import { Exemplo8 } from './exemplo8/exemplo8';
import { Exemplo9 } from './exemplo9/exemplo9';
import { Exemplo10 } from './exemplo10/exemplo10';
import { Exemplo11 } from './exemplo11/exemplo11';
import { Exercicio1 } from './exercicio1/exercicio1';
import { Exercicio2 } from './exercicio2/exercicio2';
import { Exercicio3 } from './exercicio3/exercicio3';
import { Exercicio4 } from './exercicio4/exercicio4';
import { Exercicio5 } from './exercicio5/exercicio5';
import { Exercicio6 } from './exercicio6/exercicio6';
import { Exercicio7 } from './exercicio7/exercicio7';


export const routes: Routes = [
    {path:'componente1', component: Componente1},
    {path:'exemplo1',component: Exemplo1},
    {path:'exemplo2',component: Exemplo2},
    {path:'exemplo3',component: Exemplo3},
    {path:'exemplo4',component: Exemplo4},
    {path:'exemplo5',component: Exemplo5},
    {path:'exemplo6',component: Exemplo6},
    {path:'exemplo7',component: Exemplo7},
    {path:'exemplo8',component: Exemplo8},
    {path:'exemplo9',component: Exemplo9},
    {path:'exemplo10',component: Exemplo10},
    {path:'exemplo11',component: Exemplo11},
    {path:'exercicio1',component: Exercicio1},
    {path:'exercicio2',component: Exercicio2},
    {path:'exercicio3',component: Exercicio3},
    {path:'exercicio4',component: Exercicio4},
    {path:'exercicio5',component: Exercicio5},
    {path:'exercicio6',component: Exercicio6},
    {path:'exercicio7',component: Exercicio7}
];
