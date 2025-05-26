import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-brand-dark text-white py-8 px-4 grid grid-cols-4 grid-flow-row gap-4 ">
      <Card className="w-xs bg-transparent border-none">
        <CardHeader>
          <CardTitle className="text-white text-xl font-bold">
            HeadMed
          </CardTitle>
        </CardHeader>
        <CardFooter>
          <CardDescription className="text-zinc-300 text-sm">
            Revolucionando a documentação médica com inteligência artifical
          </CardDescription>
        </CardFooter>
      </Card>
      <Card className="w-xs bg-transparent border-none">
        <CardHeader>
          <CardTitle className="text-white text-xl font-bold">
            Produto
          </CardTitle>
        </CardHeader>
        <CardFooter>
          <CardDescription className="text-zinc-300 text-sm font-extralight [&>ul>li]:hover:cursor-pointer [&>ul>li]:hover:text-brand-200 [&>ul>li]:hover:underline">
            <ul>
              <li>Recursos</li>
              <li>Preços</li>
              <li>API</li>
              <li>Segurança</li>
            </ul>
          </CardDescription>
        </CardFooter>
      </Card>
      <Card className="w-xs bg-transparent border-none">
        <CardHeader>
          <CardTitle className="text-white text-xl font-bold ">
            Empresa
          </CardTitle>
        </CardHeader>
        <CardFooter>
          <CardDescription className="text-zinc-300 text-sm font-extralight [&>ul>li]:hover:cursor-pointer [&>ul>li]:hover:text-brand-200 [&>ul>li]:hover:underline">
            <ul>
              <li>Sobre</li>
              <li>Equipe</li>
              <li>Carreiras</li>
              <li>Contato</li>
            </ul>
          </CardDescription>
        </CardFooter>
      </Card>
      <Card className="w-xs bg-transparent border-none">
        <CardHeader>
          <CardTitle className="text-white text-xl font-bold ">
            Suporte
          </CardTitle>
        </CardHeader>
        <CardFooter>
          <CardDescription className="text-zinc-300 text-sm font-extralight [&>ul>li]:hover:cursor-pointer [&>ul>li]:hover:text-brand-200 [&>ul>li]:hover:underline">
            <ul>
              <li>Central de Ajuda</li>
              <li>Documentação</li>
              <li>Status</li>
              <li>Comunidade</li>
            </ul>
          </CardDescription>
        </CardFooter>
      </Card>
      <Separator className="col-span-4 my-4 bg-zinc-300" />
      <div className="flex col-span-4 items-center justify-between text-sm text-zinc-300 px-4">
        <p> © 2025 HeadMed. Todos os direitos reservados. </p>
        <ul className="flex items-center gap-4 [&>li]:hover:cursor-pointer [&>li]:hover:text-brand-200 [&>li]:hover:underline">
          <li>Privacidade</li>
          <li>Termos</li>
          <li>Cookies</li>
        </ul>
      </div>
    </footer>
  );
};
