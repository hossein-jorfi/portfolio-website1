// assets
import NextDash from "@/assets/projects/next-dash.png";
import Landing from "@/assets/projects/landing.png";

// components
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <div className="text-primary px-3 space-y-10 mt-5">
      <ProjectCard
        image={NextDash}
        title="Next.js Dashboard"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum culpa nulla at cupiditate, nihil vel explicabo, nostrum voluptatibus nesciunt excepturi possimus mollitia veritatis delectus reiciendis harum libero beatae porro ad!"
        liveLink=""
        gitHubLink=""
      />
      <ProjectCard
        image={Landing}
        title="Next.js Dashboard"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum culpa nulla at cupiditate, nihil vel explicabo, nostrum voluptatibus nesciunt excepturi possimus mollitia veritatis delectus reiciendis harum libero beatae porro ad!"
        liveLink=""
        gitHubLink=""
      />
    </div>
  );
};

export default Projects;
