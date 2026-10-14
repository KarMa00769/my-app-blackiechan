using MiApi.Models;

namespace MiApi.Services;

public interface ITareaService
{
    IEnumerable<Tarea> ObtenerTodas();

    Tarea? ObtenerPorId(int id);
    Tarea Crear(Tarea tarea);
    bool Eliminar(int id);
    bool Actualizar(int id);
}