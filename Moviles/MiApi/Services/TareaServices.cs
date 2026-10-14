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

    public bool Eliminar(int id)
    {
        var tarea = _tarea.FirstOrDefault(t => t.Id == id);
        if (tarea is null) return false;
        _tarea.Remove (tarea);
        return true;
    }

    public bool Actualizar (int id, Tarea tarea)
    {
        var tareaBuscada = _tarea.FirstOrDefault(t=> t.Id == id);
        if (tareaBuscada is null) return false;

        tareaBuscada.Titulo = tarea.Titulo;
        tareaBuscada.Descripcion = tarea.Descripcion;
        tareaBuscada.Completada = tarea.Completada;

        return true;
    } 
}