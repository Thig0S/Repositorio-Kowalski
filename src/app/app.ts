import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Sobre } from './components/sobre/sobre';
import { Habilidades } from './components/habilidades/habilidades';
import { Projetos } from './components/projetos/projetos';
import { Formulario } from './components/formulario/formulario';
import { Footer } from './components/footer/footer';

@Component({
  imports: [Navbar, Sobre, Habilidades, Projetos, Formulario, Footer], //Esse cara é o @RenderBody
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  //raiz /startup do projeto
}
