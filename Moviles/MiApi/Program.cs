var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

//Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Cors
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",policy =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

var app = builder.Build();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();

    //Swagger UI
    app.UseSwagger();
    app.UseSwaggerUI();
}

//CORS
app.UseCors("AllowAll");


//Lista que actua como base de datos
var tareas = new List<Tarea>()
{
  new Tarea {Id=1, Titulo= "Tarea 1", Descripcion= "Descripcion de la tarea 1", Completada=false},
  new Tarea {Id=2, Titulo= "Tarea 2", Descripcion= "Descripcion de la tarea 2", Completada=true}  
};

var licencia = new Licencia
{
    Nombre = "Manuel",
    numeroLicencia = "FQ-000112",
    fechaNacimiento = "14/07/1986",
    fechaVencimiento = "14/07/2030",
    tipoLicencia = "Clase B",
    direccion = "Piña 124, Fondo de Bikini",
    estado = "Activa"
};

//Exponer endpoints
//GET


app.MapGet("/getLicencia", () =>
{
    return Results.Ok(licencia);
});








app.MapGet("/getTareas",() =>
{
    return Results.Ok(tareas);
});

app.MapGet("/tareas/{id}", (int id) =>
{
    var tarea =tareas.FirstOrDefault(t=>t.Id == id);
    if (tarea == null)
    {
        return Results.NotFound(new{mensaje = "Tarea no encontrada"});
    }
    return Results.Ok(tarea);
});

app.MapPost("/tareas",(Tarea nuevatarea) =>
{
    //Generar ID
    nuevatarea.Id = tareas.Count >0 ? tareas.Max(t => t.Id) + 1 : 1;
    tareas.Add(nuevatarea);

    //201

    return Results.Created($"/tareas{nuevatarea.Id}",nuevatarea);
});

//Delete

app.MapDelete("/tareas/{id}", (int id) =>
{
    var tarea = tareas.FirstOrDefault(t => t.Id == id);
    if(tarea == null)
    {
        return Results.NotFound(new {mensaje = "Tarea no encontrada"});
    }
    tareas.Remove(tarea);
    return Results.NoContent();//204 - eliminado
});

//Put

app.MapPut("/tareas/{id}",(int id,Tarea actualizarTarea)=>
{
    var tarea = tareas.FirstOrDefault(t=> t.Id == id);

    if(tarea == null)
    
        return Results.NotFound(new {mensaje = "Tarea no encontrada"});
        tarea.Titulo = actualizarTarea.Titulo;
        tarea.Descripcion = actualizarTarea.Descripcion;
        tarea.Completada = actualizarTarea.Completada;

        return Results.NoContent(); //204
    
});

app.Run();
