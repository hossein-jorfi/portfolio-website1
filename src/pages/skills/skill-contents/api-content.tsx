// assets
import GraphqlIcon from "@/assets/skills/api/graphql.svg?react";
import SWRIcon from "@/assets/skills/api/swr.svg?react";
import ReactQueryLogo from "@/assets/skills/api/react-query-logo.png";
import { ReactNode } from "react";

const ApiContent = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center items-baseline gap-5 flex-wrap">
        <ItemContainer title="GraphQl" icon={<GraphqlIcon width={40} />} />
        <ItemContainer
          title="React Query"
          icon={<img src={ReactQueryLogo} width={40} />}
        />
      </div>
      <ItemContainer title="SWR" icon={<SWRIcon height={20} />} />
    </div>
  );
};

export default ApiContent;

const ItemContainer = ({ title, icon }: { title: string; icon: ReactNode }) => (
  <div className="flex flex-col justify-center items-center">
    <div>{icon}</div>
    <p className="text-sm font-bold">{title}</p>
  </div>
);
