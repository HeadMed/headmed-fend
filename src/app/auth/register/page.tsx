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
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

export default function RegisterPage() {
  // Validations da senha
  const [len, setLen] = useState(false);
  const [low, setLow] = useState(false);
  const [up, setUp] = useState(false);
  const [esp, setEsp] = useState(false);
  const [num, setNum] = useState(false);
  const [valor, setValor] = useState(0);
  const [complete, setComplete] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Estados para erros individuais
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const { register } = useAuth();
  const router = useRouter();

  // Regex para validar emails específicos
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@(gmail|outlook|hotmail|icloud)\.(com|com\.br)$/i;

  // Função para validar username
  const validateUsername = (value: string) => {
    if (!value.trim()) {
      setUsernameError("Nome de usuário é obrigatório");
      return false;
    }
    setUsernameError("");
    return true;
  };

  // Função para validar email
  const validateEmail = (value: string) => {
    if (!value.trim()) {
      setEmailError("E-mail é obrigatório");
      return false;
    }
    if (!emailRegex.test(value)) {
      setEmailError("E-mail deve ser gmail, outlook, hotmail ou icloud");
      return false;
    }
    setEmailError("");
    return true;
  };

  // Função para validar senha
  const validatePassword = () => {
    if (!len) {
      setPasswordError("Senha deve ter pelo menos 8 caracteres");
      return false;
    }
    if (!low) {
      setPasswordError("Senha deve conter ao menos uma letra minúscula");
      return false;
    }
    if (!up) {
      setPasswordError("Senha deve conter ao menos uma letra maiúscula");
      return false;
    }
    if (!esp) {
      setPasswordError("Senha deve conter ao menos um caracter especial");
      return false;
    }
    if (!num) {
      setPasswordError("Senha deve conter ao menos um número");
      return false;
    }
    setPasswordError("");
    return true;
  };

  // Função para validar confirmação de senha
  const validateConfirmPassword = (value: string) => {
    if (!value.trim()) {
      setConfirmPasswordError("Confirmação de senha é obrigatória");
      return false;
    }
    if (value !== password) {
      setConfirmPasswordError("As senhas não coincidem");
      return false;
    }
    setConfirmPasswordError("");
    return true;
  };

  useEffect(() => {
    let newValor = 0;
    let newLen = false;
    let newLow = false;
    let newUp = false;
    let newEsp = false;
    let newNum = false;
    let newComplete = false;

    if (password.length >= 8) {
      newLen = true;
      newValor += 20;
    }

    if (/[a-z]/.test(password)) {
      newLow = true;
      newValor += 20;
    }

    if (/[A-Z]/.test(password)) {
      newUp = true;
      newValor += 20;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
      newEsp = true;
      newValor += 20;
    }

    if (/[0-9]/.test(password)) {
      newNum = true;
      newValor += 20;
    }

    if (newLen && newLow && newUp && newEsp && newNum) {
      newComplete = true;
    }

    setLen(newLen);
    setLow(newLow);
    setUp(newUp);
    setEsp(newEsp);
    setNum(newNum);
    setValor(newValor);
    setComplete(newComplete);

    // Limpar erro de senha se ela estiver válida
    if (password && newLen && newLow && newUp && newEsp && newNum) {
      setPasswordError("");
    }
  }, [password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validar todos os campos
    const isUsernameValid = validateUsername(username);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword(confirmPassword);

    // Se algum campo for inválido, parar o submit
    if (
      !isUsernameValid ||
      !isEmailValid ||
      !isPasswordValid ||
      !isConfirmPasswordValid
    ) {
      setLoading(false);
      return;
    }

    try {
      await register(username, email, password);
      router.push("/scribe-ai");
    } catch (err) {
      setEmailError("Erro ao criar conta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-screen w-screen bg-brand-200 flex justify-end overflow-hidden">
      <div className="h-full w-[550px] bg-brand-50 shadow-xl shadow-black flex flex-col justify-start overflow-y-auto">
        <div className="flex-1 flex flex-col justify-center py-8 px-8">
          <Card className="bg-transparent shadow-none border-none">
            <CardHeader className="pb-4">
              <h1 className="text-3xl text-center font-bold text-brand-200">
                Cadastro
              </h1>
            </CardHeader>

            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="username" className="text-sm text-brand-dark">
                    Usuário
                  </Label>
                  <Input
                    id="username"
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

                <div className="space-y-1">
                  <Label htmlFor="email" className="text-sm text-brand-dark">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) validateEmail(e.target.value);
                    }}
                    onBlur={(e) => validateEmail(e.target.value)}
                    placeholder="Insira seu e-mail"
                    className={
                      emailError
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : ""
                    }
                    required
                  />
                  {emailError && (
                    <p className="text-red-500 text-xs mt-1">{emailError}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm text-brand-dark">
                    Senha
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Insira a Senha"
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

                  <Progress
                    className={`h-2 ${complete ? "[&>*]:bg-brand-200" : ""}`}
                    value={valor}
                  />

                  <div className="p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                    <h4 className="text-xs font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Requisitos da senha
                    </h4>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div
                        className={`flex items-center gap-1.5 transition-all duration-200 ${
                          len ? "text-green-700" : "text-gray-500"
                        }`}
                      >
                        <div
                          className={`w-2.5 h-2.5 rounded-full border flex items-center justify-center transition-all duration-200 ${
                            len
                              ? "bg-green-500 border-green-500"
                              : "border-gray-300 bg-white"
                          }`}
                        >
                          {len && (
                            <svg
                              className="w-1.5 h-1.5 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <span className={len ? "font-medium" : ""}>
                          8+ caracteres
                        </span>
                      </div>

                      <div
                        className={`flex items-center gap-1.5 transition-all duration-200 ${
                          low ? "text-green-700" : "text-gray-500"
                        }`}
                      >
                        <div
                          className={`w-2.5 h-2.5 rounded-full border flex items-center justify-center transition-all duration-200 ${
                            low
                              ? "bg-green-500 border-green-500"
                              : "border-gray-300 bg-white"
                          }`}
                        >
                          {low && (
                            <svg
                              className="w-1.5 h-1.5 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <span className={low ? "font-medium" : ""}>
                          Minúscula
                        </span>
                      </div>

                      <div
                        className={`flex items-center gap-1.5 transition-all duration-200 ${
                          up ? "text-green-700" : "text-gray-500"
                        }`}
                      >
                        <div
                          className={`w-2.5 h-2.5 rounded-full border flex items-center justify-center transition-all duration-200 ${
                            up
                              ? "bg-green-500 border-green-500"
                              : "border-gray-300 bg-white"
                          }`}
                        >
                          {up && (
                            <svg
                              className="w-1.5 h-1.5 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <span className={up ? "font-medium" : ""}>
                          Maiúscula
                        </span>
                      </div>

                      <div
                        className={`flex items-center gap-1.5 transition-all duration-200 ${
                          num ? "text-green-700" : "text-gray-500"
                        }`}
                      >
                        <div
                          className={`w-2.5 h-2.5 rounded-full border flex items-center justify-center transition-all duration-200 ${
                            num
                              ? "bg-green-500 border-green-500"
                              : "border-gray-300 bg-white"
                          }`}
                        >
                          {num && (
                            <svg
                              className="w-1.5 h-1.5 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <span className={num ? "font-medium" : ""}>Número</span>
                      </div>

                      <div
                        className={`flex items-center gap-1.5 transition-all duration-200 ${
                          esp ? "text-green-700" : "text-gray-500"
                        } col-span-2`}
                      >
                        <div
                          className={`w-2.5 h-2.5 rounded-full border flex items-center justify-center transition-all duration-200 ${
                            esp
                              ? "bg-green-500 border-green-500"
                              : "border-gray-300 bg-white"
                          }`}
                        >
                          {esp && (
                            <svg
                              className="w-1.5 h-1.5 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <span className={esp ? "font-medium" : ""}>
                          Caracter especial
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <Label
                    htmlFor="confirmPassword"
                    className="text-sm text-brand-dark"
                  >
                    Confirmar Senha
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      if (confirmPasswordError)
                        validateConfirmPassword(e.target.value);
                    }}
                    onBlur={(e) => validateConfirmPassword(e.target.value)}
                    placeholder="Confirme a Senha"
                    className={
                      confirmPasswordError
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : ""
                    }
                    required
                  />
                  {confirmPasswordError && (
                    <p className="text-red-500 text-xs mt-1">
                      {confirmPasswordError}
                    </p>
                  )}
                </div>
              </CardContent>

              <CardFooter className="flex flex-col items-center gap-3 pt-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-[85%] bg-brand-200 hover:bg-brand-200/80 text-zinc-200 font-bold"
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
      </div>
    </main>
  );
}
