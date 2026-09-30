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
      descricao: 'Desenvolvimento de aplicações orientadas a Objetos',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=html&theme=dark',
      titulo: 'HTML',
      descricao: 'Estruturação semântica e acessível de páginas e aplicações web.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=scss&theme=dark',
      titulo: 'SCSS',
      descricao: 'Criação de estilos organizados, reutilizáveis e responsivos.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=ts&theme=dark',
      titulo: 'TypeScript',
      descricao: 'Desenvolvimento de código JavaScript tipado e mais fácil de manter.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=angular&theme=dark',
      titulo: 'Angular',
      descricao: 'Construção de aplicações web escaláveis com componentes e TypeScript.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=rxjs&theme=dark',
      titulo: 'RxJS',
      descricao: 'Composição e gerenciamento de fluxos assíncronos e eventos.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=git&theme=dark',
      titulo: 'Git',
      descricao: 'Versionamento de código e colaboração segura em projetos de software.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=docker&theme=dark',
      titulo: 'Docker',
      descricao: 'Criação de ambientes isolados e consistentes para desenvolvimento e entrega.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=cypress&theme=dark',
      titulo: 'Cypress',
      descricao: 'Automação de testes de ponta a ponta para aplicações web.',
    },
  ];
}
