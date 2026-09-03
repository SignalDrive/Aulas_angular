import { Routes } from '@angular/router';
import { Componente1 } from './componente1/componente1';
import { Component } from '@angular/core';
import { Exemplo1 } from './exemplo1/exemplo1';
import { Exemplo2 } from './exemplo2/exemplo2';
import { Exemplo3 } from './exemplo3/exemplo3';
import { Exemplo4 } from './exemplo4/exemplo4';
import { Exemplo5 } from './exemplo5/exemplo5';


export const routes: Routes = [
    {path:'componente1', component: Componente1},
    {path:'exemplo1',component: Exemplo1},
    {path:'exemplo2',component: Exemplo2},
    {path:'exemplo3',component: Exemplo3},
    {path:'exemplo4',component: Exemplo4},
    {path:'exemplo5',component: Exemplo5}
];
