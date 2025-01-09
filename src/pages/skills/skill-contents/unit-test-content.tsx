import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import VitestIcon from "@/assets/skills/vitest.svg?react";
import JestIcon from "@/assets/skills/jest.svg?react";

const UnitTestContent = () => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2 w-full">
        <UnitTestItem count={1} type="pass" />
        <UnitTestItem count={1} type="pass" className="ml-7" />
        <UnitTestItem count={1} type="failed" />
        <UnitTestItem count={1} type="failed" className="ml-7" />
      </div>
      <div className="flex flex-col items-center w-full">
        <VitestIcon className="w-6 h-6" />
        <JestIcon className="w-6 h-6" />
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
      <p>
        {count} {type}
      </p>
    </div>
  );
};
