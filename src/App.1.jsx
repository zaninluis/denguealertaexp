import { RouterProvider } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { router } from "./App";

export default function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}
