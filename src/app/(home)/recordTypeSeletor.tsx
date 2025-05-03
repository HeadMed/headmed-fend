import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";


export const RecordTypeSelector = () => {
    return (
      <Card className="w-full md:h-[200px]">
        <CardTitle className="ml-5">Type of medical record</CardTitle>
        <CardContent>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select the type of medical record" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="teste">teste</SelectItem>
              <SelectItem value="teste1">teste 1</SelectItem>
              <SelectItem value="teste2">teste 2</SelectItem>
              <SelectItem value="teste3">teste 3</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
    );
}