import "./App.scss";
import { Outlet, useLocation } from "react-router-dom";
import Home from "./Home";
import useMediaQuery from "@mui/material/useMediaQuery";


function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const matches = useMediaQuery("(min-width:845px)");


  return (
    <>
      {/* <motion.div ref={ref} className="box" style={{ x, y }}></motion.div> */}
      <div
        style={
          matches ? { display: "flex", justifyContent: "space-between" } : {}
        }
      >
        <div style={ !isHome ? {marginLeft: '50px'} : {}}>
          <Home isHome={isHome} />
          {!isHome && matches && <div style={{marginTop: '150px', marginLeft: '28px', position: 'fixed'}}><img src="../atthepark-smaller.png" alt="Sam and his cute toddler drinking coffee" /></div>}
        </div>
        <div style={matches ? { maxWidth: "50%" } : {}}>
          <Outlet />
        </div>
        {isHome && (
          <div>
            <div aria-label="flickering firefly" className="firefly"></div>
            <div aria-label="flickering firefly"  className="firefly"></div>
            <div aria-label="flickering firefly"  className="firefly"></div>
            <div aria-label="flickering firefly"  className="firefly"></div>
            <div aria-label="flickering firefly"  className="firefly"></div>
            <div aria-label="flickering firefly"  className="firefly"></div>
            <div aria-label="flickering firefly"  className="firefly"></div>
            <div aria-label="flickering firefly"  className="firefly"></div>
            <div aria-label="flickering firefly"  className="firefly"></div>
            <div aria-label="flickering firefly"  className="firefly"></div>
            <div aria-label="flickering firefly"  className="firefly"></div>
            <div aria-label="flickering firefly"  className="firefly"></div>
            <div aria-label="flickering firefly"  className="firefly"></div>
            <div aria-label="flickering firefly"  className="firefly"></div>
            <div aria-label="flickering firefly"  className="firefly"></div>
            <div aria-label="flickering firefly"  className="firefly"></div>
            <div aria-label="flickering firefly"  className="firefly"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
