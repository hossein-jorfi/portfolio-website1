import {
  ElemYellow,
  ElemBlue,
  ElemGreen,
} from "../../../components/editor-elemnts";

const GitContent = () => {
  return (
    <div className="text-xl">
      <p>
        <ElemYellow>git add</ElemYellow> <ElemBlue>.</ElemBlue>
      </p>
      <p>
        <ElemYellow>git commit</ElemYellow> <ElemBlue>-m</ElemBlue>{" "}
        <ElemGreen>"idk"</ElemGreen>
      </p>
      <p>
        <ElemYellow>git push</ElemYellow>
      </p>
    </div>
  );
};

export default GitContent;
