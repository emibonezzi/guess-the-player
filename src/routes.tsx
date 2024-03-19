import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./components/Homepage";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "game", element: <App /> },
    ],
  },
]);

export default router;
