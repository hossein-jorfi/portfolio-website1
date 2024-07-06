const ReactContent = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center items-center">
        <Box />
      </div>
      <div className="flex justify-center items-center gap-4">
        <Box />
        <Box />
      </div>
      <div className="flex justify-center items-center gap-4">
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
};

export default ReactContent;

const Box = () => {
  return (
    <>
      <div className="w-16 h-8 border-2 border-sky-300 rounded-lg" />
    </>
  );
};
