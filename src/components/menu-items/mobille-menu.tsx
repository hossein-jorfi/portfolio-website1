import { useState } from "react";

const MobilleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => {
    setIsOpen(!isOpen);
      document.body.style.overflow = "hidden";
  };
  
  return (
    <div className="flex sm:hidden justify-end">
      <p onClick={clickHandler}>Menu</p>
      {isOpen && (
        <div className="w-full h-full absolute top-0 right-0 bg-slate-600 z-30">
          test
        </div>
      )}
    </div>
  );
};

export default MobilleMenu;
