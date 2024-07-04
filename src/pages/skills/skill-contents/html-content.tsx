import { motion } from "framer-motion";
import { ReactNode } from "react";

const HTMLContetnt = () =>
  "<h1>Hello World</h1>".split("").map((el, i) => (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.25,
        delay: i / 10,
      }}
      key={i}
      className="text-3xl"
    >
      {el === "<" ? (
        <Elem1>{el}</Elem1>
      ) : el === "h" ? (
        <Elem2>{el}</Elem2>
      ) : el === "1" ? (
        <Elem2>{el}</Elem2>
      ) : el === ">" ? (
        <Elem1>{el}</Elem1>
      ) : el === "/" ? (
        <Elem1>{el}</Elem1>
      ) : (
        <Elem1>{el}</Elem1>
      )}
    </motion.span>
  ));

export default HTMLContetnt;

const Elem1 = ({ children }: { children: ReactNode }) => (
  <span className="text-primary">{children}</span>
);
const Elem2 = ({ children }: { children: ReactNode }) => (
  <span className="text-red-400">{children}</span>
);
