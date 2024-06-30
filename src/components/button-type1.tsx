import { ReactNode } from "react";

type ButtonType1Props = {
  children: ReactNode;
};

const ButtonType1 = ({ children }: ButtonType1Props) => {
  return <button className="border-2 p-3 text-white">{children}</button>;
};

export default ButtonType1;
