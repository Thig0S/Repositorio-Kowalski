import { Component } from '@angular/core';

interface ItemNavBar{
  titulo: string;
  url: string;
  icone: string;
}

@Component({
  imports: [],
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class Navbar {
  public readonly itens: ItemNavBar[] = [
    {titulo: 'Sobre', url: '#sobre', icone: "bi-person"},
    {titulo: 'Habilidades', url: '#habilidades', icone: "bi-award"},
    {titulo: 'Portfólio', url: '#portfolio', icone: "bi-card-list"}
  ];
}
