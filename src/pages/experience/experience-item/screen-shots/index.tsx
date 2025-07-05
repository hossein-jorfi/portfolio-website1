import { Button } from "@/components/ui/button";
import Images from "./images";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Link } from "lucide-react";

const ScreenShots = () => {
  return (
    <div className="sm:px-7">
      <Button variant="link" className="text-2xl -ml-4" asChild>
        <a href="https://botlyzer.ir" target="_blank">
          <Link className="mr-2 size-5" />
          botlyzer.ir
        </a>
      </Button>
      <div className="flex items-center gap-1 text-slate-400 mt-2">
        <InfoCircledIcon />
        <p className="text-sm">Click the photo to view it on a bigger size.</p>
      </div>
      <Images />
    </div>
  );
};

export default ScreenShots;
