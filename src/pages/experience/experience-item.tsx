const ExperienceItem = () => {
  return (
    <div className="mt-8 ml-4 flex gap-10">
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
    <div className="flex flex-col gap-2 items-center">
      <Circle value="2023" />
      <div className="w-[1px] h-[60px] bg-primary"></div>
      <Circle value="now" />
    </div>
  );
};

const Circle = ({ value }: { value: string }) => (
  <div className="border-2 rounded-[50%] text-xs w-11 h-11 flex justify-center items-center">
    {value}
  </div>
);
