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
      <Link target="_blank" to="https://www.linkedin.com/in/hosseinjorfi/">
        <LinkedinIcon {...icon_props} />
      </Link>
      <Link target="_blank" to="https://t.me/hosseinjorfi">
        <TelegramIcon {...icon_props} />
      </Link>
      <Link target="_blank" to="https://github.com/hossein-jorfi">
        <GitHubIcon {...icon_props} width={39} height={39} />
      </Link>
    </div>
  );
};

export default SocialMedia;
