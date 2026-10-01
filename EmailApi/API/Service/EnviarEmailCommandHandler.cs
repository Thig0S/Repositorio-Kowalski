using EmailApi.API.config;
using MailKit.Net.Smtp;
using MediatR;
using Microsoft.Extensions.Options;
using MimeKit;

namespace EmailApi.API.Service;

public sealed record EnviarEmailCommand(
    string Nome,
    string Email,
    string Mensagem
) : IRequest;

public class EnviarEmailCommandHandler(IOptions<EmailSettings> options) : IRequestHandler<EnviarEmailCommand>
{
  public async Task Handle(EnviarEmailCommand request, CancellationToken cancellationToken)
  {

    var settingsSecrets = options.Value;

    var email = new MimeMessage(); //cria um objeto de email 

        email.From.Add( //email da pessoa que enviou pra API
            new MailboxAddress(
                request.Nome,
                request.Email
            )
        );

        email.To.Add(
            new MailboxAddress( //Meu email pessoal que eu vai receber o email 
                "Thiago",
                settingsSecrets.Username
            )
        );

      email.Subject = "Contato do Portfolio!";

      email.Body = new TextPart("plain")
        {
          // No atributo text cria essa string para 

            Text = $"""
            Nome: {request.Nome}
            E-mail: {request.Email}

            Mensagem:
            {request.Mensagem}
            """
        };

        using var smtpClient = new SmtpClient();

        await smtpClient.ConnectAsync(
          settingsSecrets.Host,
          settingsSecrets.Port,
          MailKit.Security.SecureSocketOptions.StartTls
        );
      
      await smtpClient.AuthenticateAsync(
            settingsSecrets.Username,
            settingsSecrets.Password
        );

        await smtpClient.SendAsync(email);

        await smtpClient.DisconnectAsync(true);
    }
  }

