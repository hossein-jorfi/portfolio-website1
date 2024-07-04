import { motion } from "framer-motion";

const TypeScriptContetnt = () => {
  return (
    <div>
      {"const name = 'Hossein'".split("").map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
          className="text-2xl"
        >
          {el}
        </motion.span>
      ))}
    </div>
  );
};

export default TypeScriptContetnt;
