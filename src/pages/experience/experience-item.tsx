const ExperienceItem = () => {
  return (
    <div className="mt-8 ml-4 flex gap-4">
      <TimeLine />
      <div>
        <p className="text-5xl font-bold">Maroon Moshaver Arjan</p>
        <p className="text-4xl font-bold">React Developer</p>
      </div>
    </div>
  );
};

export default ExperienceItem;

const TimeLine = () => {
  return (
    <div className="flex flex-col">
      <Circle />
      <div> line</div>
      <Circle />
    </div>
  );
};

const Circle = () => <div className="border-2 rounded-full">test</div>;
