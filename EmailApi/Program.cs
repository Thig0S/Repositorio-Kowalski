var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

//add os controllers da API
builder.Services.AddControllers();

var app = builder.Build();

//CORS (Cross-Origin Resource Sharing). é onde registramos os servicos externos da aplicacao
//No caso dessa aplicação C# ela vai acessar o Angular na porta 4200
builder.Services.AddCors(options =>
{
    //Aqui cria uma política de CORS chamada: Angular
    options.AddPolicy("Angular", policy =>
    {
        policy
            .WithOrigins("http://localhost:4200") //qual o caminho que esta o resource sharing, ele autororiza essa origem a fazer requisições a API
            .AllowAnyHeader() //Isso permite que o Angular envie qualquer header HTTP para a API.
            .AllowAnyMethod(); //Permite que o Angular utilize qualquer método HTTP:
    });
});

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseCors("Angular"); // usa a politica que eu criei 

app.MapControllers();

app.Run();

