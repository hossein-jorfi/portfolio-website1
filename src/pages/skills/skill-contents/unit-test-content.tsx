import { Check, Cross2Icon } from "lucide-react";

const UnitTestContent = () => {
  return (
    <div>
      <UnitTestItem count={2} type="pass" />
      <UnitTestItem count={2} type="pass" />
      <UnitTestItem count={2} type="pass" />
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
    <div className="flex gap-3">
      icon
      <p>
        {count} {type}
      </p>
    </div>
  );
};
