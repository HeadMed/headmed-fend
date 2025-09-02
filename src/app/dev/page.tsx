import { ChevronsLeft, PencilLine } from "lucide-react";
import { MobileNav } from "./(components)/mobileNav";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";


export default function page() {
  return (
    <div className="h-vh w-dvw  bg-brand-50">
      <div className="flex flex-col items-center justify-between pt-4 h-full">
        <p className="text-brand-200 text-xl font-bold">Scribe.ai</p>
        <div
          id="first-section"
          className="flex flex-col items-center justify-between text-center space-y-4 p-4"
        >
          <div className="bg-brand-200 w-36 rounded-full text-brand-50 p-7 ">
            <PencilLine size={90} />
          </div>
          <h1 className="text-3xl font-bold text-brand-200">Scribe.ai</h1>
          <span className="w-11/12 p-x-4">
            Otimize seu tempo com transcrições precisas e automáticas de suas
            consultas.
          </span>
        </div>

        <div className="text-left p-4 w-full ">
          <h2 className="text-brand-200 text-xl font-bold pl-1 pb-4">Dicas Rápidas</h2>

          <div className="">
            <Carousel className="">
              <CarouselContent>
                <CarouselItem className="basis-2/3">
                  <Card className="bg-brand-100">
                    <CardHeader className="justify-center">
                      <div className="bg-brand-200 rounded-full w-14 p-4 text-brand-50">
                        <ChevronsLeft />
                      </div>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="font-bold text-brand-dark">
                        Use Comandos de Voz
                      </p>
                    </CardContent>
                    <CardDescription className="text-center">
                      <span>
                        Diga "iniciar gravação" para começar a transcrever sem
                        tocar no celular.
                      </span>
                    </CardDescription>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-2/3">
                  <Card className="bg-brand-100">
                    <CardHeader className="justify-center">
                      <div className="bg-brand-200 rounded-full w-14 p-4 text-brand-50">
                        <ChevronsLeft />
                      </div>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="font-bold text-brand-dark">
                        Use Comandos de Voz
                      </p>
                    </CardContent>
                    <CardDescription className="text-center">
                      <span>
                        Diga "iniciar gravação" para começar a transcrever sem
                        tocar no celular.
                      </span>
                    </CardDescription>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-2/3">
                  <Card className="bg-brand-100">
                    <CardHeader className="justify-center">
                      <div className="bg-brand-200 rounded-full w-14 p-4 text-brand-50">
                        <ChevronsLeft />
                      </div>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="font-bold text-brand-dark">
                        Use Comandos de Voz
                      </p>
                    </CardContent>
                    <CardDescription className="text-center">
                      <span>
                        Diga "iniciar gravação" para começar a transcrever sem
                        tocar no celular.
                      </span>
                    </CardDescription>
                  </Card>
                </CarouselItem>
                
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <MobileNav />
      </div>
    </div>
  );
}

 
