import { Check, X } from "lucide-react";

const UnitTestContent = () => {
  return (
    <div className="flex flex-col gap-2">
      <UnitTestItem count={1} type="pass" />
      <UnitTestItem count={1} type="pass" />
      <UnitTestItem count={1} type="failed" />
      <UnitTestItem count={1} type="failed" />
    </div>
  );
};

export default UnitTestContent;

type UnitTestItemProps = {
  type: "pass" | "failed";
  count: number;
};

const UnitTestItem = ({ type, count }: UnitTestItemProps) => {
  return (
    <div
      className={`flex gap-3 ${
        type === "pass" ? "text-green-500" : "text-red-500"
      }`}
    >
      <div className="border-2 rounded-full p-1">
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
