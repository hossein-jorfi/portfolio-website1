import Container from "@/components/container";
import MenuItems from "@/components/menu-items";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <div className="flex flex-col w-full gap-5">
        <MenuItems />
        {children}
      </div>
    </Container>
  );
};

export default MainLayout;
