namespace EmailApi.API.Request;

  public sealed record RequestEmailRequest(
    string Nome,
    string Email,
    string Mensagem
  );