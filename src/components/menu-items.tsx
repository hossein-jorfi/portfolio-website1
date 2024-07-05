// components
import { Link } from "react-router-dom";

const MENU_ITEMS = [
  { id: 0, title: "Skills", to: "skills" },
  { id: 0, title: "About", to: "about" },
  { id: 0, title: "Experience", to: "experience" },
];
const MenuItems = () => {
  return (
    <div>
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
