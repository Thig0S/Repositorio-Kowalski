import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';



@Component({
  imports: [Navbar], //Esse cara é o @RenderBody
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  //raiz /startup do projeto
  
}
