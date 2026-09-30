import { Component } from '@angular/core';

interface Projeto {
  titulo: string;
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
      titulo: 'Gerador de cerificados Online',
      descricao:
        'A aplicação permite cadastrar cursos e alunos, gerar certificados em lote de forma assíncrona e acompanhar o processamento dos certificados. O projeto utiliza autenticação JWT, persistência relacional e mensageria para organizar o fluxo de geração e download dos arquivos.',
      urlImagem: '',
      urlRepositorio: '',
      tecnologias: [
        'C#',
        '.NET 10',
        'Entity Framework',
        'ASP.NET Core',
        'MassTransit',
        'RabbitMQ',
        'Sql Server',
      ],
    },
  ];
}
