type ProjectCardProps = {
  image: string;
  text: string;
  liveLink: string;
  gitHubLink: string;
};

const ProjectCard = () => {
  return (
    <div className="flex gap-4">
      <div className="border rounded-xl w-1/3 h-auto flex justify-center items-center">
        image
      </div>
      <div className="w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magni in
        quod repudiandae doloribus expedita totam reiciendis voluptate iure a
        voluptatibus aspernatur officia architecto, error omnis, nostrum ipsam
        distinctio eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magni in
        quod repudiandae doloribus expedita totam reiciendis voluptate iure a
        voluptatibus aspernatur officia architecto, error omnis, nostrum ipsam
        distinctio eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magni in
        quod repudiandae doloribus expedita totam reiciendis voluptate iure a
        voluptatibus aspernatur officia architecto, error omnis, nostrum ipsam
        distinctio eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magni in
        quod repudiandae doloribus expedita totam reiciendis voluptate iure a
        voluptatibus aspernatur officia architecto, error omnis, nostrum ipsam
        distinctio eveniet?
      </div>
    </div>
  );
};

export default ProjectCard;
