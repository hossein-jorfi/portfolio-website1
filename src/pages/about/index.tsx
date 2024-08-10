// components
import AboutImage from "@/assets/images/about_page_photo.jpg";

const ABOUT_TEXT = `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        aspernatur, repellat vitae officia repellendus sint velit, deserunt quo
        cum, tempore consequatur perferendis aperiam et quos sed in sequi
        ducimus fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Harum eum laboriosam rerum perferendis molestiae, sequi animi dolor
        voluptas nisi, ut debitis nobis reprehenderit beatae suscipit,
        dignissimos nihil ex repudiandae facilis?
`;

const About = () => {
  return (
    <div className="text-primary flex justify-between items-center mt-10">
      <div className="w-1/2 p-3 text-2xl font-light">{ABOUT_TEXT}</div>
      <div className="w-1/2 border-4 rounded-2xl overflow-hidden h-fit">
        <img src={AboutImage} alt="about" />
      </div>
    </div>
  );
};

export default About;
