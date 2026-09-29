import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface ItemNavBar{
  titulo: string;
  url: string;
  icone: string;
}

@Component({
  imports: [], //Esse cara é o @RenderBody
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  //raiz /startup do projeto
  public readonly itens: ItemNavBar[] = [
    {titulo: 'Sobre', url: '#sobre', icone: "bi-person"},
    {titulo: 'Habilidades', url: '#habilidades', icone: "bi-award"},
    {titulo: 'Portfólio', url: '#portfolio', icone: "bi-card-list"}
  ];
}
