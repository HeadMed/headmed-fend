import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'


interface TeamCardProps {
  name: string
  urlImage: string
  imgFallback: string
  role: string
}

export const TeamCard = ({name,urlImage,imgFallback,role}: TeamCardProps) => {
  return (
      <Card className="flex flex-col items-center justify-center max-w-44 min-h-[312px] ">
        
        <CardHeader className='w-full text-center  '>
          <CardTitle className='text-lg font-bold'>{name}</CardTitle>
        </CardHeader>
        
        <CardContent className='text-center'>
          
          <div>
            <Avatar className='w-24 h-24'>
              <AvatarImage src={urlImage} />
              <AvatarFallback>{imgFallback}</AvatarFallback>
            </Avatar>
          </div>
        </CardContent>
        <CardFooter className='text-lg font-semibold text-center'>{role}</CardFooter>
      </Card>
  );
}

