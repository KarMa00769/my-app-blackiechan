using MiApi.Models;

namespace MiApi.Services;

public class TareaService : ITareaService
{
    private readonly List<Tarea> _tarea = new()
    {
        new Tarea {Id=1, Titulo= "Tarea 1", Descripcion= "Descripcion de la tarea 1", Completada=false},
        new Tarea {Id=2, Titulo= "Tarea 2", Descripcion= "Descripcion de la tarea 2", Completada=true} 
    };
}