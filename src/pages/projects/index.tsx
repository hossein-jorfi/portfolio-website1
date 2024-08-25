import { motion } from "framer-motion";

// assets
import NextDash from "@/assets/projects/next-dash.png";
import Landing from "@/assets/projects/landing.png";

// components
import ProjectCard from "./project-card";

const PROJECTS = [
  {
    id: 0,
    image: NextDash,
    title: "Next.js Dashboard",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum culpa nulla at cupiditate, nihil vel explicabo, nostrum voluptatibus nesciunt excepturi possimus mollitia veritatis delectus reiciendis harum libero beatae porro ad!",
    liveLink: "https://nextjs-dashboard-hossein.vercel.app",
    gitHubLink: "https://github.com/hossein-jorfi/nextjs-dashboard",
  },
  {
    id: 1,
    image: Landing,
    title: "Landing page",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum culpa nulla at cupiditate, nihil vel explicabo, nostrum voluptatibus nesciunt excepturi possimus mollitia veritatis delectus reiciendis harum libero beatae porro ad!",
    liveLink: "https://landing-page-neon-five.vercel.app",
    gitHubLink: "https://github.com/hossein-jorfi/landing-page",
  },
];

const Projects = () => {
  return (
    <div className="text-primary px-3 space-y-10 mt-5">
      {PROJECTS.map((project, index) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: (index + 1) / 2,
          }}
          key={project.id}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
