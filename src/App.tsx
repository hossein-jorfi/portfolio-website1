// components
import { useEffect } from "react";
import Home from "./pages/home";
import Skills from "./pages/skills";
import { Events, scrollSpy } from "react-scroll";

function App() {
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <div className="main_bg">
      <div className="main_paper">
        <Home />
        <Skills />
      </div>
    </div>
  );
}

export default App;
