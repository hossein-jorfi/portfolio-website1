import { ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonType1Props = {
  children: ReactNode;
  onClick?: () => void;
};

const ButtonType1 = ({ children, onClick = () => {} }: ButtonType1Props) => {
  return (
    <motion.button
      onClick={onClick}
      className="border-2 p-3 rounded-2xl text-primary text-lg"
    >
      {children}
    </motion.button>
  );
};

export default ButtonType1;
