import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card'
import { BrainCircuit, Stethoscope, Zap, Shield, Webhook, Blocks } from 'lucide-react'
import React from 'react'

export const FeatureSection = () => {
  return (
    <section className="flex flex-col items-center py-16 h-auto bg-white">
      <div className="flex flex-col space-y-4 items-center px-4">
        <h1 className="text-5xl w-2xl font-bold text-center">
          Principais Funcionalidades
        </h1>

        <p className="text-zinc-500 text-xl font-light text-center">
          Desenvolvido especificamente para profissionais de saúde modernos
        </p>

        <div className=" max-w-6xl grid grid-cols-3 grid-flow-row gap-2">
          <Card>
            <CardHeader>
              <BrainCircuit className="text-brand-200" />
            </CardHeader>

            <CardContent className="font-bold text-2xl">
              <CardTitle>IA médica avançada</CardTitle>
            </CardContent>

            <CardFooter>
              <CardDescription className="text-black text-base">
                Processamento de linguagem natural especializado em terminologia
                médica
              </CardDescription>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Stethoscope className="text-brand-200" />
            </CardHeader>

            <CardContent className="font-bold text-2xl">
              <CardTitle>Transcrição de Consultas Inteligentes</CardTitle>
            </CardContent>

            <CardFooter>
              <CardDescription className="text-black text-base">
                Converta gravações de áudio em tempo real ou previamente
                gravadas em prontuários estruturados automaticamente.
              </CardDescription>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="text-brand-200" />
            </CardHeader>

            <CardContent className="font-bold text-2xl">
              <CardTitle>Processamento Rápido</CardTitle>
            </CardContent>

            <CardFooter>
              <CardDescription className="text-black text-base">
                Gere documentos médicos completos em segundos, não em horas
              </CardDescription>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="text-brand-200" />
            </CardHeader>

            <CardContent className="font-bold text-2xl">
              <CardTitle>Segurança LGPD</CardTitle>
            </CardContent>

            <CardFooter>
              <CardDescription className="text-black text-base">
                Processamento de linguagem natural especializado em terminologia
                médica
              </CardDescription>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Webhook className="text-brand-200" />
            </CardHeader>

            <CardContent className="font-bold text-2xl">
              <CardTitle>Disponibilização da API</CardTitle>
            </CardContent>

            <CardFooter>
              <CardDescription className="text-black text-base">
                Processamento de linguagem natural especializado em terminologia
                médica
              </CardDescription>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Blocks className="text-brand-200" />
            </CardHeader>

            <CardContent className="font-bold text-2xl">
              <CardTitle>Integração com Sistemas Existentes</CardTitle>
            </CardContent>

            <CardFooter>
              <CardDescription className="text-black text-base">
                Converta gravações de áudio em tempo real ou previamente
                gravadas em prontuários estruturados automaticamente.
              </CardDescription>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
