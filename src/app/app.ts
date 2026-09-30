import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Sobre } from './components/sobre/sobre';



@Component({
  imports: [Navbar, Sobre], //Esse cara é o @RenderBody
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  //raiz /startup do projeto
  
}
