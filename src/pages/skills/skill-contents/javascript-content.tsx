import {
  ElemGreen,
  ElemMethod,
  ElemVarYellow,
  ElemWhite,
  ElemYellow,
} from "../../../components/editor-elemnts";

const JavascriptContent = () => {
  return (
    <div>
      <ElemVarYellow>element</ElemVarYellow>
      <ElemWhite>.</ElemWhite>
      <ElemMethod>addEventListener</ElemMethod>
      <ElemYellow>(</ElemYellow> <ElemGreen>"click"</ElemGreen>{" "}
      <ElemWhite>,</ElemWhite> <ElemMethod>handler</ElemMethod>{" "}
      <ElemYellow>)</ElemYellow> <ElemWhite>;</ElemWhite>
    </div>
  );
};

export default JavascriptContent;
