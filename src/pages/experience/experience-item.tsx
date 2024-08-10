const ExperienceItem = () => {
  return (
    <div className="mt-8 ml-4 flex gap-10">
      <TimeLine />
      <div>
        <p className="text-5xl font-bold">Maroon Moshaver Arjan</p>
        <p className="text-4xl font-bold">React Developer</p>
        <p className="w-full mt-2 text-xl">
          The website I worked on with this team was a "crypto trading
          platform", and I was responsible for the app logic. This included
          handling all routing, API calls, authorization, and real-time features
          such as websockets or Pusher events and other features.
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
    <div className="flex flex-col gap-2 items-center">
      <Circle value="2023" />
      <div className="w-[1px] h-[100%] bg-primary"></div>
      <Circle value="now" />
    </div>
  );
};

const Circle = ({ value }: { value: string }) => (
  <div className="w-full h-fit">
    <div className="border-2 rounded-[50%] text-xs w-11 h-11 flex justify-center items-center">
      {value}
    </div>
  </div>
);
