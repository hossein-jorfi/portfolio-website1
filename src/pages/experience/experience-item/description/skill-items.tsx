import { ReactNode } from "react";

// components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// assets
import ReactIcon from "@/assets/skills/react.svg?react";
import HTMLIcon from "@/assets/skills/html.svg?react";
import CSSIcon from "@/assets/skills/css.svg?react";
import TSIcon from "@/assets/skills/typescript.svg?react";
import ReduxIcon from "@/assets/skills/redux.svg?react";
import TailwindIcon from "@/assets/skills/ui_lib/Tailwind.svg?react";

const ITEMS = [
  {
    id: 0,
    name: "HTML",
    icon: <HTMLIcon />,
  },
  {
    id: 1,
    name: "CSS",
    icon: <CSSIcon />,
  },
  {
    id: 2,
    name: "Typescript",
    icon: <TSIcon />,
  },
  {
    id: 3,
    icon: <ReactIcon />,
    name: "React",
  },
  {
    id: 4,
    icon: <ReduxIcon />,
    name: "Redux",
  },
  {
    id: 5,
    icon: <TailwindIcon />,
    name: "Tailwindcss",
  },
];

const SkillItems = () => {
  return (
    <div className="flex md:flex-col gap-1 md:justify-between h-full md:ml-2 mt-2 md:mt-0">
      {ITEMS.map((item) => (
        <SkillItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default SkillItems;

const SkillItem = ({ icon, name }: { icon: ReactNode; name: string }) => {
  console.log(name);
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger className="w-5 md:w-4">
          <div>{icon}</div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-slate-900 font-bold">{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
