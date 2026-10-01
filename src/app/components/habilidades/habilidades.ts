import { Component } from '@angular/core';

//como se o record
interface Habilidade {
  imagem: string;
  titulo: string;
  descricao: string;
}

@Component({
  selector: 'app-habilidades',
  imports: [],
  templateUrl: './habilidades.html',
})
//export = public
export class Habilidades {
  public readonly listaDaHabilidades: Habilidade[] = [
    {
      imagem: 'https://skillicons.dev/icons?i=cs',
      titulo: 'C#',
      descricao: 'Development of Object-Oriented applications.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=html&theme=dark',
      titulo: 'HTML',
      descricao: 'Semantic and accessible structure for web pages and applications.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=scss&theme=dark',
      titulo: 'SCSS',
      descricao: 'Creation of organized, reusable, and responsive styles.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=ts&theme=dark',
      titulo: 'TypeScript',
      descricao: 'Development of typed JavaScript code that is easier to maintain.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=angular&theme=dark',
      titulo: 'Angular',
      descricao: 'Building scalable web applications with components and TypeScript.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=rxjs&theme=dark',
      titulo: 'RxJS',
      descricao: 'Composition and management of asynchronous streams and events.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=git&theme=dark',
      titulo: 'Git',
      descricao: 'Code version control and secure collaboration on software projects.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=docker&theme=dark',
      titulo: 'Docker',
      descricao: 'Creation of isolated and consistent environments for development and delivery.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=cypress&theme=dark',
      titulo: 'Cypress',
      descricao: 'End-to-end test automation for web applications.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=vscode&theme=dark',
      titulo: 'VS CODE',
      descricao: 'IDE used for developing and building applications.',
    },
  ];
}
