import Images from "./images";
import { InfoCircledIcon } from "@radix-ui/react-icons";

const ScreenShots = () => {
  return (
    <div className="sm:px-7">
      <p className="text-xl">
        The website has not yet been published. however, I have included some
        screenshots for your reference.
      </p>
      <div className="flex items-center gap-1 text-slate-400 mt-0">
        <InfoCircledIcon />
        <p className="text-sm">Click the photo to view it on a bigger size.</p>
      </div>
      <Images />
    </div>
  );
};

export default ScreenShots;
