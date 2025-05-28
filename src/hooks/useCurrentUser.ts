// src/hooks/useCurrentUser.ts
"use client";

import { useState, useEffect, useCallback } from "react";
import { apiService } from "@/lib/api";

export interface User {
  id: number;
  username: string;
  email: string;
  created_at: string;
}

export function useCurrentUser() {
  const [user, setUser]     = useState<User>({} as User);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUser = useCallback(async () => {
    console.log("🔄 Fetching user...");
    try {
      const data = await apiService.getCurrentUser();
      console.log("📥 Data da API:", data);
      setUser(data as User);
    } finally {
      setLoading(false);
    }
  }, []);

  // dispara o fetch na primeira render
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  // 📣 sempre que user mudar, cai aqui
  useEffect(() => {
    console.log("🆕 Estado user mudou para:", user);
  }, [user]);

  return {
    user,
    loading,
    reload: fetchUser,
  };
}
