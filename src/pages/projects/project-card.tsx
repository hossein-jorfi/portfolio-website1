type ProjectCardProps = {
  image: string;
  title: string;
  text: string;
  liveLink: string;
  gitHubLink: string;
};

const ProjectCard = ({
  text,
  image,
  gitHubLink,
  liveLink,
  title,
}: ProjectCardProps) => {
  console.log(gitHubLink, liveLink);
  return (
    <div className="flex gap-4">
      <div className="border-2 p-3 rounded-xl w-[40%] h-auto flex justify-center items-center">
        <img src={image} alt={title} className="rounded-md" />
      </div>
      <div className="w-[60%]">{text}</div>
    </div>
  );
};

export default ProjectCard;
