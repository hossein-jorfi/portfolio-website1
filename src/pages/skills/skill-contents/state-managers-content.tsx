import { ReactNode } from "react";

// assets
import ZustandLogo from "../../../assets/skills/state_managers/zustand.svg";
import ReduxLogo from "../../../assets/skills/state_managers/redux.svg";

const StateManagersContent = () => {
  return (
    <div className="flex gap-8 h-full justify-center items-center mt-5">
      <ItemContainer icon={<img src={ReduxLogo} width={80} />} title="Redux" />
      <ItemContainer
        icon={<img src={ZustandLogo} width={80} />}
        title="Zustand"
      />
    </div>
  );
};

export default StateManagersContent;

const ItemContainer = ({ title, icon }: { title: string; icon: ReactNode }) => (
  <div className="flex flex-col gap-0.5 justify-center items-center">
    <div>{icon}</div>
    <p className="text-sm font-bold">{title}</p>
  </div>
);
