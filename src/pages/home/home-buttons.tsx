// components
import ButtonType1 from "../../components/button-type1";

const HomeButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
      <ButtonType1>Download CV</ButtonType1>
      <DividerLine />
      <ButtonType1 to="skills">Skills</ButtonType1>
      <ButtonType1>About</ButtonType1>
      <ButtonType1>Experience</ButtonType1>
    </div>
  );
};

export default HomeButtons;

const DividerLine = () => (
  <div className="w-[2px] rounded-lg bg-primary mx-2 hidden sm:block"></div>
);
