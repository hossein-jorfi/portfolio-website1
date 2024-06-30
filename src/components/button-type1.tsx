import { ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonType1Props = {
  children: ReactNode;
};

const ButtonType1 = ({ children }: ButtonType1Props) => {
  return (
    <motion.button className="border-2 p-3 rounded-2xl text-white text-lg">
      {children}
    </motion.button>
  );
};

export default ButtonType1;
