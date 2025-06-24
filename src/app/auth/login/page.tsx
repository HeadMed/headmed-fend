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
import React, { useState } from "react";
import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Estados para erros individuais
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { login } = useAuth();
  const router = useRouter();

  const validateUsername = (value: string) => {
    if (!value.trim()) {
      setUsernameError("Nome de usuário é obrigatório");
      return false;
    }
    setUsernameError("");
    return true;
  };

  // Função para validar confirmação de senha
  const validatePassword = (value: string) => {
    if (!value.trim()) {
      setPasswordError("Senha é obrigatório");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validar todos os campos
    const isUsernameValid = validateUsername(username);
    const isPasswordValid = validatePassword(password);

    // Se algum campo for inválido, parar o submit
    if (!isUsernameValid || !isPasswordValid) {
      setLoading(false);
      return;
    }

    if (!username || !password) {
      setError("Por favor, preencha todos os campos.");
    } else {
      try {
        await login(username, password);
        router.push("/scribe-ai");
      } catch (err) {
        setError("Nome de usuário ou senha inválida!");
        setUsernameError(" ");
        setPasswordError(" ");
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <main className="h-dvh w-dvw bg-brand-200 flex justify-end">
      <div className="h-full w-[550px] bg-brand-50 shadow-xl shadow-black flex flex-col justify-center ">
        <Card className="bg-transparent shadow-none border-none">
          <CardHeader>
            <h1 className="text-4xl text-center font-bold text-brand-200">
              Login
            </h1>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <div className="py-3">
                <Label htmlFor="user" className="text-md text-brand-dark mb-3">
                  Usuário
                </Label>
                <Input
                  name="user"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    if (usernameError) validateUsername(e.target.value);
                  }}
                  onBlur={(e) => validateUsername(e.target.value)}
                  placeholder="Insira o nome de usuário"
                  className={
                    usernameError
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : ""
                  }
                  required
                />
                {usernameError && (
                  <p className="text-red-500 text-xs mt-1">{usernameError}</p>
                )}
              </div>
              <div>
                <Label
                  htmlFor="password"
                  className="text-md text-brand-dark mb-3"
                >
                  Senha
                </Label>
                <Input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (passwordError) validatePassword(e.target.value);
                  }}
                  onBlur={(e) => validatePassword(e.target.value)}
                  placeholder="Confirme a Senha"
                  className={
                    passwordError
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : ""
                  }
                  required
                />
                {passwordError && (
                  <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                )}
              </div>
              {error && <div className="text-red-700 rounded">{error}</div>}
            </CardContent>
            <CardFooter className="flex flex-col items-center mt-6 gap-4">
              <Button
                type="submit"
                className="w-[80%] bg-brand-200 hover:bg-brand-200/80 text-zinc-200 font-bold"
              >
                Entrar
              </Button>
              <p className="text-sm text-brand-dark">
                Não tem uma conta?{" "}
                <Link
                  href="/auth/register"
                  className="text-brand-200 hover:underline"
                >
                  Faça o cadastro
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  );
};

export default page;
