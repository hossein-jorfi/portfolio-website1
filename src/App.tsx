// components
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <div className="main_bg">
      <div className="main_paper">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
