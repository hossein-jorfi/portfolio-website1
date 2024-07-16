import { ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonType1Props = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

const ButtonType1 = ({
  children,
  onClick = () => {},
  className,
}: ButtonType1Props) => {
  return (
    <motion.button
      whileHover={{ paddingRight: '30px', paddingLeft: '30px' }}
      whileTap={{
        scale: 0.8,
        // rotate: -90,
        // borderRadius: "100%",
      }}
      onClick={onClick}
      className={`border-2 p-3 rounded-2xl text-primary text-sm md:text-lg ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default ButtonType1;
