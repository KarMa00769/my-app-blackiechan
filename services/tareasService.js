import apiClient from "../api/client";

export async function getTasks(){
    const res = await apiClient.get('/getTareas');
    return res.data;
}

export async function getTaskById(id) {
    const res = await apiClient.get(`/tareas/${id}`);
    return get.data
}

export async function createTask(tarea) {

    const res = await apiClient.post('/tareas',tarea);
    return res.data;
}

export async function deleteTask(id) {
    await apiClient.delete(`/tareas/${id}`);
}

export async function updateTask(id,tarea) {
    await apiClient.put(`/tareas/${id}`, tarea);
}