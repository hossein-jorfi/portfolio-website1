const ExperienceItem = () => {
  return (
    <div className="mt-8 ml-4 flex flex-col md:flex-row gap-3 md:gap-10">
      <TimeLine />
      <div>
        <p className="text-5xl font-bold">Maroon Moshaver Arjan</p>
        <p className="text-4xl font-bold">React Developer</p>
        <p className="w-full mt-2 text-xl">
        The website on which I collaborated with this team was a cryptocurrency trading platform, and I held the responsibility for the application logic. This encompassed managing all routing, API calls, authorization processes, as well as real-time functionalities such as websockets or Pusher events, among other features.
        </p>
        <div className="flex gap-2 items-center mt-1">
          <span className="w-[3px] h-[3px] rounded-full bg-primary"></span>
          <p className="text-sm">
            Routing - API - WebSocket - State Management(Redux & Context) -
            Performance Optimization
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;

const TimeLine = () => {
  return (
    <div className="flex w-full md:w-fit justify-between flex-row md:flex-col gap-2 items-center">
      <Circle value="2023" />
      <div className="w-full h-[1px] md:w-[1px] md:h-full bg-primary"></div>
      <Circle value="now" />
    </div>
  );
};

const Circle = ({ value }: { value: string }) => (
  <div className="w-fit h-fit">
    <div className="border-2 rounded-[50%] text-xs w-11 h-11 flex justify-center items-center">
      {value}
    </div>
  </div>
);
