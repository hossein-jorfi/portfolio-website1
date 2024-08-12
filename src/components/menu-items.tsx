import { motion } from "framer-motion";
// components
import { Link, useLocation } from "react-router-dom";

const MENU_ITEMS = [
  { id: 0, title: "Home", to: "/" },
  { id: 1, title: "Skills", to: "/skills" },
  { id: 3, title: "Experience", to: "/experience" },
  { id: 2, title: "About", to: "/about" },
];
const MenuItems = () => {
  return (
    <div className="text-primary">
      <div className="text-2xl sm:flex gap-5 ml-3 w-full hidden ">
        {MENU_ITEMS.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
      <div className="flex sm:hidden justify-end">
        Menu
      </div>
    </div>
  );
};

export default MenuItems;

const MenuItem = ({
  title,
  to,
  className,
}: {
  title: string;
  to: string;
  className?: string;
}) => {
  const { pathname } = useLocation();
  return (
    <motion.span
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      transition={{ duration: 0.5 }}
      className="relative group inline-block"
    >
      <Link className={`${className} `} to={to}>
        {title}
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "anticipate" }}
          className={`absolute left-0 -bottom-1 bg-primary h-[2px] group-hover:w-full transition-[width] ease-in-out duration-300 ${
            to === pathname ? "w-full" : "w-0"
          }`}
        ></motion.span>
      </Link>
    </motion.span>
  );
};
