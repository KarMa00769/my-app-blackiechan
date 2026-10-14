import apiClient from '../api/client';

export async function getLicencia() {
  const response = await apiClient.get('/getLicencia');
  return response.data;
}
