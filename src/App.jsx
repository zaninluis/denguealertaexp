import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useState } from "react";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import "./assets/css/reset.css";
import "./assets/css/variables.css";
import "./assets/css/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router} />;
}

export default App;
