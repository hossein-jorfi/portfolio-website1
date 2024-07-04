// import { motion } from "framer-motion";
import { ReactNode } from "react";

const TypeScriptContetnt = () => {
  //   let name = 'hossein'
  //   name = 10
  //   console.log(name)
  return (
    <div className="text-2xl">
      {/* {"const name = 'Hossein'".split("").map((el, i) => (
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
      ))} */}
      <p>let name = "Hossein"</p>
      <p>
        <ErrorUnderLine>name</ErrorUnderLine> = 10
      </p>
      <p>ts: </p>
    </div>
  );
};

export default TypeScriptContetnt;

const ErrorUnderLine = ({ children }: { children: ReactNode }) => (
  <span className="relative w-fit">
    <span>{children}</span>
    <span className="w-full h-[2px] bg-red-700" />
  </span>
);
