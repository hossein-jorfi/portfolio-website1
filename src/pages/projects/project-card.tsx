// icons
import { GitHubLogoIcon, ExternalLinkIcon } from "@radix-ui/react-icons";

// components
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type ProjectCardProps = {
  image: string;
  title: string;
  text: string;
  liveLink: string;
  gitHubLink: string;
  skills?: ReactNode[];
};

const ProjectCard = ({
  text,
  image,
  gitHubLink,
  liveLink,
  title,
  skills,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 border-2 border-primary/50 rounded-3xl p-4">
      <div className="border-2 border-primary/50 p-3 rounded-xl w-full md:w-[40%] h-auto flex justify-center items-center">
        <img src={image} alt={title} className="rounded-md" />
      </div>
      <div className="w-full md:w-[60%] flex flex-col gap-4 justify-between items-start">
        <div className="space-y-2">
          <p className="text-xl">{title}</p>
          <p className="text-primary/90">
            {text?.split(" ").map((i) => {
              if (i?.includes(".com")) {
                return (
                  <a
                    href={`https://${i}`}
                    className="text-blue-500 hover:text-blue-600 hover:underline"
                    target="_blank"
                  >
                    {i}{" "}
                  </a>
                );
              } else {
                return `${i} `;
              }
            })}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {skills?.map((skill, index) => (
            <div key={index} className="w-6">
              {skill}
            </div>
          ))}
        </div>
        <div className="flex items-start gap-6">
          <a href={liveLink} target="_blank">
            <Button
              variant="link"
              className="px-0 flex items-center gap-1.5 text-primary/70 hover:text-primary/90"
            >
              Visit Website <ExternalLinkIcon />
            </Button>
          </a>
          <a href={gitHubLink} target="_blank">
            <Button
              variant="link"
              className="px-0 flex items-center gap-1.5 text-primary/70 hover:text-primary/90"
            >
              See on GitHub <GitHubLogoIcon />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
