import { motion } from "framer-motion";
import { useState } from "react";
import { MENU_ITEMS } from "./contants";
import { Link, useLocation } from "react-router-dom";

const MobilleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeHandler = () => {
    setIsOpen(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <div className="flex sm:hidden justify-end">
      <p onClick={openHandler}>Menu</p>
      {isOpen && (
        <div className="w-full h-full absolute top-0 right-0 bg-slate-600 flex flex-col items-center">
          {MENU_ITEMS.map((item) => (
            <MenuItem onClose={closeHandler} key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MobilleMenu;

const MenuItem = ({
  title,
  to,
  className,
  onClose
}: {
  title: string;
  to: string;
  className?: string;
  onClose: () => void
}) => {
  const { pathname } = useLocation();
  return (
    <motion.span
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      transition={{ duration: 0.5 }}
      className="w-full h-full text-7xl flex justify-center items-center z-[10000]"
    >
      <Link onClick={onClose} className={`${className} ${to === pathname && 'bg-slate-950'}`} to={to}>
        {title}
      </Link>
    </motion.span>
  );
};
