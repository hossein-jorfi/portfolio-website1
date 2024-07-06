import Xarrow, { Xwrapper } from "react-xarrows";

const ReactContent = () => {
  return (
    <Xwrapper>
      <div className="flex flex-col gap-6">
        <div className="flex justify-center items-center">
          <Box id="1" />
          <Line start="1" end="2" />
          <Line start="1" end="3" />
        </div>
        <div className="flex justify-center items-center gap-4">
          <Box id="2" />
          <Box id="3" />
          <Line start="2" end="4" />
          <Line start="3" end="5" />
          <Line start="3" end="6" />
        </div>
        <div className="flex justify-center items-center gap-4">
          <Box id="4" />
          <Box id="5" />
          <Box id="6" />
        </div>
      </div>
    </Xwrapper>
  );
};

export default ReactContent;

const Box = ({ id }: { id: string }) => {
  return (
    <>
      <div
        id={id}
        className="w-16 h-8 border-2 border-sky-300 rounded-sm flex justify-center items-center"
      >
        {id}
      </div>
    </>
  );
};

const Line = ({ start, end }: { start: string; end: string }) => {
  return (
    <Xarrow
      start={start}
      end={end}
      color={"rgb(125 211 252)"}
      showHead={false}
      strokeWidth={2}
      startAnchor="bottom"
      endAnchor="top"
      path="grid"
    />
  );
};
