import { ReactNode, useState } from "react";
// styles
import styles from "./typescript-content.module.scss";

const TypeScriptContetnt = () => {
  return (
    <div className="text-2xl">
      <p>let name = "Hossein"</p>
      <p>
        <ErrorUnderLine>name</ErrorUnderLine> = 10
      </p>
    </div>
  );
};

export default TypeScriptContetnt;

const ErrorUnderLine = ({ children }: { children: ReactNode }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <span className="relative w-fit">
      <span className="z-10">{children}</span>
      <span
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-full absolute left-0 -bottom-1"
      >
        <span className={styles.zigzag} />
      </span>

      {showTooltip && (
        <span
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="w-44 border-2 rounded-xl p-2 absolute left-0 top-10 bg-[#191f2b] text-xl"
        >
          Type 'number' is not assignable to type 'string'{" "}
          <span className="text-gray-600">.ts(2322)</span>
        </span>
      )}
    </span>
  );
};
