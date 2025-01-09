import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import VitestIcon from "@/assets/skills/vitest.svg?react";
import JestIcon from "@/assets/skills/jest.svg?react";

const UnitTestContent = () => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2 w-full">
        <UnitTestItem count={1} type="pass" />
        <UnitTestItem count={1} type="pass" className="ml-5" />
        <UnitTestItem count={1} type="failed" />
        <UnitTestItem count={1} type="failed" className="ml-5" />
      </div>
      <div className="flex flex-col justify-between items-center w-full gap-2">
        <div className="flex flex-col  items-center">
          <VitestIcon className="w-10 h-10" />
          <p className="text-sm font-semibold">Vitest</p>
        </div>
        <div className="flex flex-col  items-center">
          <JestIcon className="w-10 h-10" />
          <p className="text-sm font-semibold">Jest</p>
        </div>
      </div>
    </div>
  );
};

export default UnitTestContent;

type UnitTestItemProps = {
  type: "pass" | "failed";
  count: number;
  className?: string;
};

const UnitTestItem = ({ type, count, className }: UnitTestItemProps) => {
  return (
    <div
      className={cn(
        "flex gap-3 font-semibold",
        type === "pass" ? "text-green-500" : "text-red-500",
        className
      )}
    >
      <div
        className={cn(
          "border-2 rounded-full p-1",
          type === "pass" ? "border-green-500" : "border-red-500"
        )}
      >
        {type === "pass" ? (
          <Check className="w-[15px] h-[15px]" />
        ) : (
          <X className="w-[15px] h-[15px]" />
        )}
      </div>
      <p className="text-nowrap">
        {count} {type}
      </p>
    </div>
  );
};
