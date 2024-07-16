// components
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <div className="main_paper">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
