import { ReactNode } from "react";
import { Element } from "react-scroll";

const Container = ({
  children,
  scrollTarget = "",
}: {
  children: ReactNode;
  scrollTarget?: string;
}) => {
  return (
    <Element
      name={scrollTarget}
      className="flex justify-center h-full container p-10"
    >
      {children}
    </Element>
  );
};

export default Container;
