// components
import { Link } from "react-router-dom";

const MENU_ITEMS = [
  { id: 0, title: "Home", to: "/" },
  { id: 1, title: "Skills", to: "/skills" },
  { id: 2, title: "About", to: "/about" },
  { id: 3, title: "Experience", to: "/experience" },
];
const MenuItems = () => {
  return (
    <div className="text-primary text-2xl flex gap-5">
      {MENU_ITEMS.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default MenuItems;

const MenuItem = ({ title, to }: { title: string; to: string }) => {
  return <Link to={to}>{title}</Link>;
};
