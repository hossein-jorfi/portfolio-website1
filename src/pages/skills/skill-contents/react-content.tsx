import Xarrow, { Xwrapper } from "react-xarrows";

const ReactContent = () => {
  return (
    <Xwrapper>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <Box id="1" />
        </div>
        <div className="flex justify-center items-center gap-4">
          <Box id="2" />
          <Box id="3" />
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
      <div id={id} className="w-16 h-8 border-2 border-sky-300 rounded-lg" />
    </>
  );
};
