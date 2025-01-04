// components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

// assets
import Landing1 from "@/assets/botlyzer/bot1.png";
import Autotrading from "@/assets/botlyzer/bot_autotrading.png";
import CreateSrategy from "@/assets/botlyzer/bot_c_srategy.png";
import Login from "@/assets/botlyzer/bot_login.png";

const Images = () => {
  return (
    <div className="p-10">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
        }}
      >
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
    <Dialog>
      <CarouselItem className="md:basis-1/2">
        <DialogTrigger>
          <img src={src} alt="screenshot" className="cursor-pointer" />
        </DialogTrigger>
      </CarouselItem>

      <DialogContent>
        <img src={src} alt="screenshot" />
      </DialogContent>
    </Dialog>
  );
};
