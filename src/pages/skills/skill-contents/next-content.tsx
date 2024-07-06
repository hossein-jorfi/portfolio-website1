import { ReactNode } from "react";
// assets
import ServerShape from "../../../assets/common/server.svg?react";
import Spinner from "../../../components/spinner";

// utils
// import Xarrow from "react-xarrows";

// components

const NextContent = () => {
  return (
    <div className="flex gap-14">
      <ServerBox />
      <Page />
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

const Page = () => (
  <PageSection className="w-full h-40 flex gap-2">
    <PageSection className="w-1/3 h-full border-2 rounded-sm"></PageSection>
    <PageSection className="w-2/3 h-full border-2 rounded-sm flex flex-col gap-2">
      <div className="w-full h-1 bg-white" />
      <div className="w-full h-1 bg-white" />
      <div className="w-full h-1 bg-white" />
      <div className="w-full h-1 bg-white" />
      <div className="flex justify-center mt-3">
        <Spinner />
      </div>
    </PageSection>
  </PageSection>
);

const PageSection = ({
  className,
  children,
}: {
  className: string;
  children?: ReactNode;
}) => {
  return (
    <div className={`border-2 rounded-lg p-2 ${className}`}>{children}</div>
  );
};

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
