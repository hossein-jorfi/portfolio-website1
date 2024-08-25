import { Button } from "@/components/ui/button";

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
  return (
    <div className="flex gap-4">
      <div className="border-2 p-3 rounded-xl w-[40%] h-auto flex justify-center items-center">
        <img src={image} alt={title} className="rounded-md" />
      </div>
      <div className="w-[60%] flex flex-col justify-between items-start">
        <div className="">{text}</div>
        <div className="flex flex-col items-start gap-1">
          <Button variant="link" className="px-0">
            <a href={liveLink}>Visit Website</a>
          </Button>
          <Button variant="link" className="px-0">
            <a href={gitHubLink}>See on GitHub</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
