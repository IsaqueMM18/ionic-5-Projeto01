import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

componentes: Componente[] = [
  {
    
    icone:'appstore',
    nome:'Alerta',
    link: '/alert'
  },

  {
    icone:'clipboard',
    nome:'Abas',
    link: '/action-sheet'
  }
];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
    icone: string;
    nome: string;
    link: string;
}