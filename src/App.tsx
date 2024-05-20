import "./App.scss";
import { Outlet, useLocation } from "react-router-dom";
import Home from "./Home";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      <div
        style={
          matches ? { display: "flex", justifyContent: "space-between" } : {}
        }
      >
        <div style={{ position: "sticky", zIndex: 99999 }}>
          <Home isHome={isHome} />
        </div>
        <div style={matches ? { maxWidth: "50%" } : {}}>
          <Outlet />
        </div>
        {isHome && (
          <div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
