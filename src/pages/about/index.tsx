// components
import AboutImage from '@/assets/images/about_page_photo.jpg'

const About = () => {
  return (
    <div className="text-primary flex justify-between">
      <div className="border-2 w-1/2">text</div>
      <div className="w-1/2 border-2">
      <img src={AboutImage} alt="about" />
      </div>
    </div>
  );
};

export default About;
