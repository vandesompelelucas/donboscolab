import { auth } from "@/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { prisma } from "@/prisma";

export default async function Form() {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>;

  const datums = await prisma.datums.findMany({
    where: {
      open: false
    }
  });

  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="text-3xl">Form</h1>
      <form className="flex flex-col gap-4 mt-4">
        <Label htmlFor="email">Date</Label>
        <Input type="date" id="date" />
        <RadioGroup defaultValue="option-one">
          {datums.map((datum) => (
            <div key={datum.id} className="flex flex-row items-center gap-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={datum.id} id={datum.id} />
                <Label htmlFor={datum.id}>
                  {`${datum.titel} - ${formatDate(new Date(datum.date))}`}
                </Label>
              </div>
              <span>{datum.description}</span>
            </div>
          ))}
        </RadioGroup>
      </form>
    </div>
  );
}

function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
