import { ReactNode } from "react";

const Container = ({
  children,
  scrollTarget = "",
}: {
  children: ReactNode;
  scrollTarget?: string;
}) => {
  return (
    <div
      id={scrollTarget}
      className="flex justify-center h-full xl:container py-10 px-5"
    >
      {children}
    </div>
  );
};

export default Container;
