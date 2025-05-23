import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React from "react";
import Logo from "../../../assets/Logo.svg";
import Image from "next/image";


export const FirstSection = () => {
  return (
    <div className=" w-full h-dvh flex items-center justify-center mr-1 ">
      <div className="w-full h-full grid grid-cols-2 grid-row-2 gap-4 ">
        <div className="flex items-center justify-center ">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="w-2/3 text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              debitis iste. Architecto unde soluta dignissimos? Aliquam
              consequatur mollitia natus. Excepturi eos assumenda cum atque fuga
              quos sequi culpa labore cupiditate?
            </p>
            <Button className="w-2/3 bg-brand-200 text-lg py-6 hover:bg-brand-200/80"> teste</Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Carousel className="w-2/3 ">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6 ">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="h-16 flex items-center justify-center col-span-2 ">
          <Image
            className="pl-3 mb-2"
            src={Logo}
            alt="HeadMed logo"
            width={178.5}
            
          />
        </div>
      </div>
    </div>
  );
};
