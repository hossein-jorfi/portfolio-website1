import { motion } from "framer-motion";

const TypeScriptContetnt = () =>
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
      {el}
    </motion.span>
  ));

export default TypeScriptContetnt;
