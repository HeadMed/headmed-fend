// src/lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

class ApiService {
  private getAuthHeaders(): Record<string, string> {
    const token = localStorage.getItem('auth_token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  async request(endpoint: string, options: RequestInit = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...this.getAuthHeaders(),
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(url, config);

    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem('auth_token');
        window.location.href = '/auth/login';
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  // Auth methods
  async login(credentials: { username: string; password: string }) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async register(userData: { username: string; email: string; password: string }) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async getCurrentUser() {
    return this.request('/auth/me');
  }

  // Patient methods
  async getPatients(skip = 0, limit = 100) {
    return this.request(`/patients?skip=${skip}&limit=${limit}`);
  }

  async getPatient(id: number) {
    return this.request(`/patients/${id}`);
  }

  async getPatientByCpf(cpf: string) {
    return this.request(`/patients/cpf/${cpf}`);
  }

  async createPatient(data: { nome: string; cpf: string; data_nascimento: string }) {
    return this.request('/patients', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updatePatient(id: number, data: Partial<{ nome: string; cpf: string; data_nascimento: string }>) {
    return this.request(`/patients/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deletePatient(id: number) {
    return this.request(`/patients/${id}`, { method: 'DELETE' });
  }

  // Transcription methods
  async transcribe(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    
    return this.request('/transcribe', {
      method: 'POST',
      headers: { ...this.getAuthHeaders() },
      body: formData,
    });
  }

  async transcribeAsync(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    
    return this.request('/transcribe/async', {
      method: 'POST',
      headers: { ...this.getAuthHeaders() },
      body: formData,
    });
  }

  async transcribeForPatient(patientId: number, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    
    return this.request(`/transcribe/patient/${patientId}`, {
      method: 'POST',
      headers: { ...this.getAuthHeaders() },
      body: formData,
    });
  }

  async transcribeForPatientAsync(patientId: number, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    
    return this.request(`/transcribe/patient/${patientId}/async`, {
      method: 'POST',
      headers: { ...this.getAuthHeaders() },
      body: formData,
    });
  }

  async getTaskStatus(taskId: string) {
    return this.request(`/tasks/${taskId}`);
  }

  // Medical Records methods
  async getPatientRecords(patientId: number) {
    return this.request(`/patients/${patientId}/records`);
  }

  async getRecord(recordId: number) {
    return this.request(`/records/${recordId}`);
  }

  async createRecord(data: any) {
    return this.request('/records', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateRecord(id: number, data: any) {
    return this.request(`/records/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteRecord(id: number) {
    return this.request(`/records/${id}`, { method: 'DELETE' });
  }
}

export const apiService = new ApiService();