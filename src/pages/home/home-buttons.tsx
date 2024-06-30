import { Link } from "react-scroll";
import ButtonType1 from "../../components/button-type1";

const HomeButtons = () => {
  return (
    <div className="flex gap-4">
      <ButtonType1>Download CV</ButtonType1>
      <DividerLine />
      <Link to="skills" smooth={true} duration={500}>
        <ButtonType1
        // onClick={() => {
        //   const anchor = document.querySelector("#skills");
        //   anchor?.scrollIntoView({ behavior: "smooth", block: "center" });
        // }}
        >
          Skills
        </ButtonType1>
      </Link>
      <ButtonType1>About</ButtonType1>
      <ButtonType1>Exprereince</ButtonType1>
    </div>
  );
};

export default HomeButtons;

const DividerLine = () => (
  <div className="w-[2px] rounded-lg bg-primary mx-2"></div>
);
