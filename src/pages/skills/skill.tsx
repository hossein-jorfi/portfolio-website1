type SkillProps = {
  title: string;
};

const Skill = ({ title }: SkillProps) => {
  return <div className="text-primary">{title}</div>;
};

export default Skill;
