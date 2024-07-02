import { ReactNode } from "react";

type SkillProps = {
  title: string;
  children: ReactNode;
};

const Skill = ({ title, children }: SkillProps) => {
  return (
    <div className="text-primary border-2 h-60 p-4 rounded-lg">
      <p>{title}</p>
      {children}
    </div>
  );
};

export default Skill;
