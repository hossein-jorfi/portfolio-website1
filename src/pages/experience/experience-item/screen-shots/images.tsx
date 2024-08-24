// components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// assets
import Landing1 from "@/assets/botlyzer/bot1.png";
import Autotrading from "@/assets/botlyzer/bot_autotrading.png";
import CreateSrategy from "@/assets/botlyzer/bot_c_srategy.png";
import Login from "@/assets/botlyzer/bot_login.png";

const Images = () => {
  return (
    <div>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          <ImageItem src={Landing1} />
          <ImageItem src={Autotrading} />
          <ImageItem src={CreateSrategy} />
          <ImageItem src={Login} />
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Images;

const ImageItem = ({ src }: { src: string }) => {
  return (
    <CarouselItem>
      <img src={src} alt="screenshot" />
    </CarouselItem>
  );
};
