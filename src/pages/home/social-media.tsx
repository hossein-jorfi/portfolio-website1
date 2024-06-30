import GitHubIcon from "../../assets/social-media/github.svg?react";
import LinkedinIcon from "../../assets/social-media/linkedin.svg?react";
import TelegramIcon from "../../assets/social-media/telegram.svg?react";

const icon_size = {
  width: 24,
  height: 24,
};
const SocialMedia = () => {
  return (
    <div>
      <GitHubIcon {...icon_size} />
      <LinkedinIcon {...icon_size} />
      <TelegramIcon {...icon_size} />
    </div>
  );
};

export default SocialMedia;
