// assets
import ServerShape from "../../../assets/common/server.svg?react";

// utils
// import Xarrow from "react-xarrows";

// components

const NextContent = () => {
  return (
    <div>
      <ServerBox />
    </div>
  );
};

export default NextContent;

const ServerBox = () => (
  <div>
    {/* <div className="w-8 h-16 border-2" /> */}
    <ServerShape width={50} height={50} />
  </div>
);

// const Line = ({ start, end }: { start: string; end: string }) => {
//   return (
//     <Xarrow
//       start={start}
//       end={end}
//       color={"rgb(125 211 252)"}
//       showHead={false}
//       strokeWidth={2}
//       startAnchor="bottom"
//       endAnchor="top"
//       path="grid"
//     />
//   );
// };
