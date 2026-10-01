using EmailApi.API.Request;
using EmailApi.API.Service;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace EmailApi.API.Controller;
[ApiController]
[Route("api/email")]
public class EmailController(IMediator mediator) : ControllerBase
{
      [HttpPost]
      public async Task<ActionResult> EnviarEmail(RequestEmailRequest request)
    {
        await mediator.Send(
            new EnviarEmailCommand(request.Nome, request.Email, request.Mensagem
        ));
        
        return Ok();
    }
}