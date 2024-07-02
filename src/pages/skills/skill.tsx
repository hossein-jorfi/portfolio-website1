type SkillProps = {
  title: string;
};

const Skill = ({ title }: SkillProps) => {
  return <div className="text-primary border-2 h-60 p-4 rounded-lg">{title}</div>;
};

export default Skill;
