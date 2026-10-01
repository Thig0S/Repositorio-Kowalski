using FluentResults;
using MediatR;

namespace EmailApi.API.Service;

public sealed record EnviarEmailCommand(
    string Nome,
    string Email,
    string Mensagem
) : IRequest<Result>;

public class EnviarEmailCommandHandler : IRequestHandler<EnviarEmailCommand, Result>
{
  public async Task<Result> Handle(EnviarEmailCommand request, CancellationToken cancellationToken)
  {
    System.Console.WriteLine(request.Nome);
    System.Console.WriteLine(request.Email);
    System.Console.WriteLine(request.Mensagem);

    return Result.Ok();
  }

}
