import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="flex justify-center h-full container p-10">{children}</div>;
};

export default Container;
