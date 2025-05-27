import React from "react";
import { NotebookPen, UserRound } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
export const UserCard = () => {
  return (
    <Card className="w-96">
      <CardHeader>
        <div className="flex items-center justify-between">
          <UserRound strokeWidth="2" />
          <span>Ivisson Pereira</span>
        </div>
        <Separator />
      </CardHeader>
      <CardContent>
        <div className="w-full flex items-center justify-between gap-4">
          <Button className="bg-brand-200 hover:bg-brand-200/80 hover:cursor-pointer text-md font-semibold">
            {" "}
            Nova transcrição <NotebookPen strokeWidth="2" />{" "}
          </Button>

          <Button variant="outline">
            Ver paciente <UserRound strokeWidth="2" />{" "}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
