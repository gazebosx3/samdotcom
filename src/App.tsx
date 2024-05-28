import "./App.scss";
import { Outlet, useLocation } from "react-router-dom";
import Home from "./Home";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useFollowPointer } from "./use-follow-pointer";
import { useRef } from "react";
import { motion } from "framer-motion";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const matches = useMediaQuery("(min-width:600px)");

  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <>
            <motion.div ref={ref} className="box" style={{ x, y }}></motion.div>
      <div
        style={
          matches ? { display: "flex", justifyContent: "space-between" } : {}
        }
      >
        <div>
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
