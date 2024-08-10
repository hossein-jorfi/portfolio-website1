import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      MainLayout
      {children}
    </div>
  );
};

export default MainLayout;
