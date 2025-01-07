import { ReactNode } from "react";
// utils
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// assets
import GitHubIcon from "../../assets/social-media/github.svg?react";
import LinkedinIcon from "../../assets/social-media/linkedin.svg?react";
import TelegramIcon from "../../assets/social-media/telegram.svg?react";

const icon_props = {
  width: 34,
  height: 34,
  fill: "#b292ff",
};
const SocialMedia = () => {
  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ marginBottom: "500px" }}
      animate={{ marginBottom: "0px" }}
    >
      <IconWrapper path="https://www.linkedin.com/in/hosseinjorfi/">
        <LinkedinIcon {...icon_props} />
      </IconWrapper>
      <IconWrapper path="https://t.me/hosseinjorfi">
        <TelegramIcon {...icon_props} />
      </IconWrapper>
      <IconWrapper path="https://github.com/hossein-jorfi">
        <GitHubIcon {...icon_props} width={39} height={39} />
      </IconWrapper>
    </motion.div>
  );
};

export default SocialMedia;

const IconWrapper = ({
  path,
  children,
}: {
  children: ReactNode;
  path: string;
}) => {
  return (
    <motion.div whileTap={{ scale: 0.85 }} whileHover={{ scale: 1.1 }}>
      <Link target="_blank" to={path}>
        {children}
      </Link>
    </motion.div>
  );
};
