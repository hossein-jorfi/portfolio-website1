import { ReactNode } from "react";

type SkillProps = {
  title: string;
  children: ReactNode;
};

const Skill = ({ title, children }: SkillProps) => {
  return (
    <div className="text-primary border-2 h-60 p-4 rounded-2xl">
      <p>{title}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
};

export default Skill;
