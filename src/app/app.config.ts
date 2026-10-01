//ApplicationConfig é usado para definir confgs globais da aplicacao
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

//Esse cara é pro angular poder conversar com a API do aspnet
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()], //minha aplicacao vai utilizar o httoClient
};

//isso é como se fosse uma injeção de dependencia, com ela eu consigo usar o httpclient nos outros componentes