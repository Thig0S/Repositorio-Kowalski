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
      imagem: 'https://skillicons.dev/icons?i=dotnet&theme=dark',
      titulo: '.NET',
      descricao: 'Development of scalable applications and APIs using the .NET platform.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=cs&theme=dark',
      titulo: 'C#',
      descricao: 'Development of object-oriented applications and backend services.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=mysql&theme=dark',
      titulo: 'SQL Server',
      descricao: 'Relational database design, queries, and data persistence.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=sqlite&theme=dark',
      titulo: 'SQLite',
      descricao: 'Lightweight relational database used for application development and testing.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=rabbitmq&theme=dark',
      titulo: 'RabbitMQ',
      descricao: 'Message brokering for asynchronous and distributed application workflows.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=docker&theme=dark',
      titulo: 'Docker',
      descricao:
        'Containerization of applications and creation of consistent development environments.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=git&theme=dark',
      titulo: 'Git',
      descricao:
        'Version control and collaborative development using branching and merge workflows.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=github&theme=dark',
      titulo: 'GitHub',
      descricao: 'Code hosting, collaboration, and version control for software projects.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=angular&theme=dark',
      titulo: 'Angular',
      descricao:
        'Building scalable frontend applications using components, TypeScript, and reactive programming.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=typescript&theme=dark',
      titulo: 'TypeScript',
      descricao: 'Development of strongly typed and maintainable frontend applications.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=bootstrap&theme=dark',
      titulo: 'Bootstrap',
      descricao: 'Creation of responsive and consistent user interfaces using reusable components.',
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
      imagem: 'https://skillicons.dev/icons?i=rxjs&theme=dark',
      titulo: 'RxJS',
      descricao:
        'Composition and management of asynchronous streams and events in Angular applications.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=postman&theme=dark',
      titulo: 'Swagger & Postman',
      descricao: 'API documentation and interactive testing of RESTful services.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=vscode&theme=dark',
      titulo: 'VS Code',
      descricao: 'Code editor used for frontend and backend application development.',
    },
  ];
}
