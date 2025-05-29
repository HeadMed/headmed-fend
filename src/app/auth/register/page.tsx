// src/app/auth/register/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/authContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      setLoading(false);
      return;
    }

    try {
      await register(username, email, password);
      router.push("/scribe-ai");
    } catch (err) {
      setError("Erro ao criar conta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-dvh w-dvw bg-brand-200 flex justify-end">
      <div className="h-full w-[550px] bg-brand-50 shadow-xl shadow-black flex flex-col justify-center">
        <Card className="bg-transparent shadow-none border-none">
          <CardHeader>
            <h1 className="text-4xl text-center font-bold text-brand-200">
              Cadastro
            </h1>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent>
              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}
              <div className="py-3">
                <Label
                  htmlFor="username"
                  className="text-md text-brand-dark mb-3"
                >
                  Usuário
                </Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Insira o nome de usuário"
                  required
                />
              </div>
              <div className="py-3">
                <Label htmlFor="email" className="text-md text-brand-dark mb-3">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Insira seu e-mail"
                  required
                />
              </div>
              <div className="py-3">
                <Label
                  htmlFor="password"
                  className="text-md text-brand-dark mb-3"
                >
                  Senha
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Insira a Senha"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="confirmPassword"
                  className="text-md text-brand-dark mb-3"
                >
                  Confirmar Senha
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirme a Senha"
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center mt-6 gap-4">
              <Button
                type="submit"
                disabled={loading}
                className="w-[80%] bg-brand-200 hover:bg-brand-200/80 text-zinc-200 font-bold"
              >
                {loading ? "Cadastrando..." : "Cadastrar"}
              </Button>
              <p className="text-sm text-brand-dark">
                Já tem uma conta?{" "}
                <Link
                  href="/auth/login"
                  className="text-brand-200 hover:underline"
                >
                  Faça login
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  );
}
