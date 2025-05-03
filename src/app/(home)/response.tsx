import { Card, CardTitle, CardContent } from "@/components/ui/card";


export const Response = () => {
    return (
      
        <Card className="w-full">
          <CardTitle className="ml-5">Response</CardTitle>
          <CardContent>
            <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 text-center">
              <textarea
                className="w-full"
                name="teste"
                id="teste"
                defaultValue={
                  "loremaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                }
              ></textarea>
            </div>
          </CardContent>
        </Card>
      
    );
}