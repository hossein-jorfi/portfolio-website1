import { ReactNode } from "react";

export const ElemRed = ({ children }: { children: ReactNode }) => (
  <span className="text-red-400">{children}</span>
);
export const ElemPupule = ({ children }: { children: ReactNode }) => (
  <span className="text-[#c678dd]">{children}</span>
);
export const ElemBlue = ({ children }: { children: ReactNode }) => (
  <span className="text-[rgb(91,236,255)]">{children}</span>
);
export const ElemGreen = ({ children }: { children: ReactNode }) => (
  <span className="text-[#affa79]">{children}</span>
);
export const ElemYellow = ({ children }: { children: ReactNode }) => (
  <span className="text-[#ffb169]">{children}</span>
);
export const ElemWhite = ({ children }: { children: ReactNode }) => (
  <span className="text-primary">{children}</span>
);
