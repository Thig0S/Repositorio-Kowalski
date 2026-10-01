import { HttpClient } from '@angular/common/http'; //ferramenta responsavel por fazer requisições http
import { Injectable } from '@angular/core'; // injecao de dependencia
import { Observable } from 'rxjs'; //é para funcoes async 
import { EmailRequest } from './models/EnviarEmailRequest'; //DTO igual oq a API recebe

@Injectable({
  providedIn: 'root', //cria uma instancia que sera usada pelo resto da aplicacao
})
export class EmailService {
  private readonly apiUrl = 'http://localhost:5091/api/email';

  constructor(private http: HttpClient) {} //aqui está pedindo para o Angular fornecer uma instância de HttpClient

  //funcao enviarMensagem recebe uma variavel de dados do tipo EmailRequest (record) : ela é uma função Observable<void> = async
  enviarMensagem(dados: EmailRequest): Observable<void> {
    return this.http.post<void>(this.apiUrl, dados); //o obj http abre a apiUrl no method post e envia os dados da interface
  }
}
