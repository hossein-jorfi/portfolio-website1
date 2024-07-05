import { ReactNode } from "react";

export const ElemVarName = ({ children }: { children: ReactNode }) => (
  <span className="text-red-400">{children}</span>
);
export const ElemVarLet = ({ children }: { children: ReactNode }) => (
  <span className="text-[#c678dd]">{children}</span>
);
export const ElemEqual = ({ children }: { children: ReactNode }) => (
  <span className="text-[rgb(91,236,255)]">{children}</span>
);
export const ElemString = ({ children }: { children: ReactNode }) => (
  <span className="text-[#affa79]">{children}</span>
);
export const ElemNumber = ({ children }: { children: ReactNode }) => (
  <span className="text-orange-300">{children}</span>
);
