using MiApi.Models;

namespace MiApi.Services;

public class TareaService : ITareaService
{
    private readonly List<Tarea> _tarea = new()
    {
        new Tarea {Id=1, Titulo= "Tarea 1", Descripcion= "Descripcion de la tarea 1", Completada=false},
        new Tarea {Id=2, Titulo= "Tarea 2", Descripcion= "Descripcion de la tarea 2", Completada=true} 
    };

    public IEnumerable <Tarea> ObtenerTodas() // es lo mismo que si se le agrega => _tarea
    {
        return _tarea;
    }
    
    public Tarea? ObtenerPorId(int id)
    {
        var tarea = _tarea.FirstOrDefault(t=>t.Id == id);
        return tarea;
    }

    public Tarea Crear(Tarea tarea)
    {
        tarea.Id = _tarea.Count >0 ? _tarea.Max(t => t.Id) + 1 : 1;
        _tarea.Add(tarea);
        return tarea;
    }
}