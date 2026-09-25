import apiClient from "../api/client";

export async function getTasks(){
    const res = await apiClient.get('/tareas');
    return res.data;
}

export async function getTaskById(id) {
    const res = await apiClient.get
}