import { Component } from '@angular/core';

interface ItemNavBar {
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
    { titulo: 'About Me', url: '#sobre', icone: 'bi-person' },
    { titulo: 'Stack', url: '#habilidades', icone: 'bi-award' },
    { titulo: 'Projects', url: '#projetos', icone: 'bi-card-list' },
  ];
}
