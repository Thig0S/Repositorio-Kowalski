using System.Reflection;

namespace EmailApi.API;

public static class DependencyInjection
{
    public static void AddDependenciaService(this IServiceCollection services)
    {
        services.AddMediatR(config =>
        {
            config.RegisterServicesFromAssembly(typeof(DependencyInjection).Assembly);
        });
    }
}
