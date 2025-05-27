// src/hooks/useTranscription.ts
'use client';

import { useState } from 'react';
import { apiService } from '@/lib/api';

export interface TranscriptionResult {
  original_text: string;
  structured: Record<string, string>;
  medical_record_id?: number;
}

export interface TranscriptionTaskResponse {
  task_id: string;
  status: string;
  message?: string;
}

export interface TaskResponse {
  task_id: string;
  status: string;
  result?: TranscriptionResult;
  error?: string;
  created_at: string;
  completed_at?: string;
}

export function useTranscription() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const transcribe = async (file: File): Promise<TranscriptionResult> => {
    try {
      setLoading(true);
      setError(null);
      return await apiService.transcribe(file);
    } catch (err) {
      setError('Erro na transcrição');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const transcribeForPatient = async (patientId: number, file: File): Promise<TranscriptionResult> => {
    try {
      setLoading(true);
      setError(null);
      return await apiService.transcribeForPatient(patientId, file);
    } catch (err) {
      setError('Erro na transcrição');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const transcribeAsync = async (file: File): Promise<TranscriptionTaskResponse> => {
    try {
      setLoading(true);
      setError(null);
      return await apiService.transcribeAsync(file);
    } catch (err) {
      setError('Erro na transcrição');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const transcribeForPatientAsync = async (patientId: number, file: File): Promise<TranscriptionTaskResponse> => {
    try {
      setLoading(true);
      setError(null);
      return await apiService.transcribeForPatientAsync(patientId, file);
    } catch (err) {
      setError('Erro na transcrição');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getTaskStatus = async (taskId: string): Promise<TaskResponse> => {
    try {
      return await apiService.getTaskStatus(taskId);
    } catch (err) {
      setError('Erro ao verificar status da tarefa');
      throw err;
    }
  };

  return {
    loading,
    error,
    transcribe,
    transcribeForPatient,
    transcribeAsync,
    transcribeForPatientAsync,
    getTaskStatus,
  };
}