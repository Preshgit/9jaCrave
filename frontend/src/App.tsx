import "./output.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import ShareRecipe from "./pages/shareRecipe";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "/share-recipe",
    element: <ShareRecipe />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
