// components
import { ElemWhite, ElemYellow } from "../../../components/editor-elemnts";

const CssContent = () => {
  return (
    <div className="text-xl">
      <div>
        <ElemYellow>.container {"{"}</ElemYellow>
      </div>
      <div className="ml-5">
        <ElemWhite>display: flex;</ElemWhite>
      </div>
      <div>
        <ElemYellow>{"}"}</ElemYellow>
      </div>
    </div>
  );
};

export default CssContent;
