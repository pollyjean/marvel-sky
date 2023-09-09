import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import NotFound from "./router/screens/NotFound";
import Marvels from "./router/screens/Marvels";
import Hero from "./router/screens/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Marvels />,
      },
      {
        path: "/character/:heroId",
        element: <Hero />,
      },
    ],
  },
]);

export default router;