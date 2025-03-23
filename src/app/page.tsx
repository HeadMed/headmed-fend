import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
   <div className="h-dvh flex items-center justify-center">
      <Card className="w-[550px]">
        <CardHeader>
          <h1 className="text-3xl font-bold">teste</h1>
        </CardHeader>
        <CardContent>
          <div className="w-full flex items-center justify-center">
            <h2>Hello World</h2>
          </div>
        </CardContent>
      </Card>
   </div>
  );
}
