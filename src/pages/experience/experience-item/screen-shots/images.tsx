// assets
import Landing1 from "@/assets/botlyzer/bot1.png";
import Autotrading from "@/assets/botlyzer/bot_autotrading.png";
import CreateSrategy from "@/assets/botlyzer/bot_c_srategy.png";
import Login from "@/assets/botlyzer/bot_login.png";

const Images = () => {
  return (
    <div className="flex">
      <img src={Landing1} alt="screenshot" />
      <img src={Autotrading} alt="screenshot" />
      <img src={CreateSrategy} alt="screenshot" />
      <img src={Login} alt="screenshot" />
    </div>
  );
};

export default Images;
