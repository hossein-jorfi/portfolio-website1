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
      className="flex justify-center h-full container p-10"
    >
      {children}
    </div>
  );
};

export default Container;
