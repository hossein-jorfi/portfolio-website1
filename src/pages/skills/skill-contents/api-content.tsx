import { ReactNode } from "react";

// assets
import GraphqlIcon from "@/assets/skills/api/graphql.svg?react";
import SWRIcon from "@/assets/skills/api/swr.svg?react";
import ReactQueryLogo from "@/assets/skills/api/react-query-logo.png";
import AxiosIcon from "@/assets/skills/api/axios.svg?react";

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
      <div className="flex justify-center items-baseline gap-5"> 
        <ItemContainer title="SWR" icon={<SWRIcon height={20} />} />
        <ItemContainer title="Axios" icon={<AxiosIcon width={80} />} />
      </div>
    </div>
  );
};

export default ApiContent;

const ItemContainer = ({ title, icon }: { title: string; icon: ReactNode }) => (
  <div className="flex flex-col gap-0.5 justify-center items-center">
    <div>{icon}</div>
    <p className="text-sm font-bold">{title}</p>
  </div>
);
