import { ReactNode } from "react";

// assets
import TailwindLogo from '../../../assets/skills/ui_lib/Tailwind.svg'

const UiLibContent = () => {
  return (
    <div>
      <div className="flex gap-8 h-full justify-center items-center mt-5">
        <ItemContainer
          icon={<img src={TailwindLogo} width={40} />}
          title="Tailwind"
        />
      </div>
    </div>
  );
};

export default UiLibContent;

const ItemContainer = ({ title, icon }: { title: string; icon: ReactNode }) => (
  <div className="flex flex-col gap-0.5 justify-center items-center">
    <div>{icon}</div>
    <p className="text-sm font-bold">{title}</p>
  </div>
);
