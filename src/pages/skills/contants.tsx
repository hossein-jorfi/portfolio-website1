import HTMLContetnt from "./skill-contents/html-content";
import TypeScriptContetnt from "./skill-contents/typescript-content";
import CssContent from "./skill-contents/css-content";
import JavascriptContent from "./skill-contents/javascript-content";
import ReactContent from "./skill-contents/react-content";
import NextContent from "./skill-contents/next-content";
import GitContent from "./skill-contents/git-content";
import WebsocketContent from "./skill-contents/websocket-content";
import ApiContent from "./skill-contents/api-content";
import StateManagersContent from "./skill-contents/state-managers-content";
import UiLibContent from "./skill-contents/ui-lib-content";
import TradingviewContent from "./skill-contents/tradingview-content";
import UnitTestContent from "./skill-contents/unit-test-content";

export const SKILLS = [
  {
    title: "HTML",
    content: <HTMLContetnt />,
  },
  {
    title: "CSS",
    content: <CssContent />,
  },
  {
    title: "Javascript",
    content: <JavascriptContent />,
  },
  {
    title: "Typescript",
    content: <TypeScriptContetnt />,
  },
  {
    title: "React.js",
    content: <ReactContent />,
  },
  {
    title: "Next.js",
    content: <NextContent />,
  },
  {
    title: "Web Socket",
    content: <WebsocketContent />,
  },
  {
    title: "TradingView Advanced Chart",
    content: <TradingviewContent />,
  },
  {
    title: "API",
    content: <ApiContent />,
  },
  {
    title: "State Managers",
    content: <StateManagersContent />,
  },
  {
    title: "UI Libraries",
    content: <UiLibContent />,
  },
  {
    title: "Unit Test",
    content: <UnitTestContent />,
  },
  {
    title: "Git & Github",
    content: <GitContent />,
  }
];
