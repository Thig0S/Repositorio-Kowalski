import { Component } from '@angular/core';

interface Projeto {
  titulo: string;
  emoji: string;
  descricao: string;
  urlImagem: string;
  urlRepositorio: string;
  tecnologias: string[];
}

@Component({
  imports: [],
  selector: 'app-projetos',
  templateUrl: './projetos.html',
})
export class Projetos {
  public readonly projetos: Projeto[] = [
    {
      titulo: 'Gadeias Courses ',
      emoji: '🏫',
      descricao:
        'Gadeias Courses is a web application for managing an educational institution. It brings together student and tutor records, courses, lessons, class groups, categories, and student enrollments in one place.',
      urlImagem: 'a',
      urlRepositorio: 'https://github.com/Os-Gadeias/Gadeia-s-Cursos',
      tecnologias: [
        'AspNet MVC',
        '.NET 10',
        'Bootstrap',
        'AutoMapper',
        'FluentResults',
        'Entity',
        'Identity',
      ],
    },

    {
      titulo: 'Online Certificate Generator',
      emoji: '📚',
      descricao:
        'The application allows users to register courses and students, generate certificates in batches asynchronously, and track the certificate generation process. The project uses JWT authentication, relational data persistence, and messaging to orchestrate the certificate generation and file download workflow.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/Os-Gadeias/Gerador-de-Certificados-Online-API',
      tecnologias: [
        'C#',
        '.NET 10',
        'Entity Framework',
        'ASP.NET Core',
        'MassTransit',
        'RabbitMQ',
        'SQL Server',
        'JWT',
      ],
    },
  ];
}
