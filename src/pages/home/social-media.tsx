import { ReactNode } from "react";
// components
import { Link } from "react-router-dom";

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
    <div className="flex items-center gap-2">
      <IconWrapper path="https://www.linkedin.com/in/hosseinjorfi/">
        <LinkedinIcon {...icon_props} />
      </IconWrapper>
      <IconWrapper path="https://t.me/hosseinjorfi">
        <TelegramIcon {...icon_props} />
      </IconWrapper>
      <IconWrapper path="https://github.com/hossein-jorfi">
        <GitHubIcon {...icon_props} width={39} height={39} />
      </IconWrapper>
    </div>
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
    <Link target="_blank" to={path}>
      {children}
    </Link>
  );
};
