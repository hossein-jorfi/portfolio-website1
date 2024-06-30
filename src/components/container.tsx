import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col justify-center gap-6 h-full">
        {children}
      </div>
    </div>
  );
};

export default Container;
