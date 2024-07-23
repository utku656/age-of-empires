import "./App.css";
import Homepage from "./pages/homepage/homepage";
import Units from "./pages/units/units";
import Header from "./components/header/header";
import { Box } from "@mui/material";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import UnitDetail from "./pages/unit-detail/unit-detail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/home",
      element: <Homepage />,
    },
    {
      path: "/units",
      element: <Units />,
    },
    {
      path: "/units/:id",
      element: <UnitDetail />,
    },
  ]);
  return (
    <>
      <Box>
        <Header />
        <RouterProvider router={router} />
      </Box>
    </>
  );
}

export default App;
