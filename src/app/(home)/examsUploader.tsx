import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";

export const ExamsUploader = () => {
    return (
      <Card className="w-full">
        <CardTitle className="ml-5">Exams upload</CardTitle>
        <CardContent>
          <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 text-center">
            <label htmlFor=""></label>
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-1 text-sm text-gray-600">
              Drop files or click to select
            </p>
            <Input className="hidden" type="file" />
          </div>
        </CardContent>
      </Card>
    );
}