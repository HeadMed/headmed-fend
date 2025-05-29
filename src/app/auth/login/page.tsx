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
    const { login } = useAuth();
    const router = useRouter();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!username || !password) {
      window.alert("Por favor, preencha todos os campos.");
    }
    else{

        try {
          await login(username, password);
          router.push("/scribe-ai");
        } catch (err) {
          setError("Credenciais inválidas");
          window.alert("Credenciais inválidas");
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
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Insira o nome de usuário"
                />
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
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Insira a Senha"
                />
              </div>
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
