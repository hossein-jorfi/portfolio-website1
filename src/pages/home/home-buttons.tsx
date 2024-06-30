import ButtonType1 from "../../components/button-type1";

const HomeButtons = () => {
  return (
    <div className="flex gap-4">
      <ButtonType1>Download CV</ButtonType1>
      <DividerLine />
      <ButtonType1>Skills</ButtonType1>
      <ButtonType1>About</ButtonType1>
      <ButtonType1>Exprereince</ButtonType1>
    </div>
  );
};

export default HomeButtons;

const DividerLine = () => <div className="w-[2px] rounded-lg bg-primary mx-2"></div>;
