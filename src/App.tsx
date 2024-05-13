import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Home from "./Home";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  let location = useLocation();
  const isHome = location.pathname === "/";
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      <div
        style={
          matches ? { display: "flex", justifyContent: "space-between" } : {}
        }
      >
        <div style={{ position: "sticky" }}>
          <Home isHome={isHome} />
        </div>
        <div style={matches ? { maxWidth: "50%" } : {}}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
