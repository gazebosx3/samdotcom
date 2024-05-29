import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import "./App.scss";

type HomeProps = { isHome: boolean };

export default function Home({ isHome }: HomeProps) {
  const matches = useMediaQuery("(min-width:845px)");

  return (
    <div
      role="Name in large font"
      style={!isHome && matches ? { position: "fixed", top: 10 } : {}}
    >
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Link role="Link back to main page" style={{ color: "#213547" }} to={"/"}>
          <Typography variant={isHome ? "h1" : "h3"} gutterBottom>
            Sam Glass
          </Typography>
        </Link>
        {isHome && (
          <div>
            {" "}
            <Typography variant="h6" gutterBottom>
              I'm a software engineer who enjoys talking to people
            </Typography>
          </div>
        )}
        <div role="Button menu container">
          <Link to={"About"}>
            <button aria-label="About Me page" className="white-font">
              About
            </button>
          </Link>
          <a
            href="../GlassSamuelResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              aria-label="Link to resume in PDF form"
              className="white-font"
            >
              {" "}
              Resume
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/sam-glass/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button aria-label="Link to linkedin" className="white-font">
              {" "}
              LinkedIn
            </button>
          </a>
        </div>
      </Box>
      {!isHome && matches && (
        <div>
          <div aria-label="flickering firefly" className="firefly"></div>
          <div aria-label="flickering firefly" className="firefly"></div>
          <div aria-label="flickering firefly" className="firefly"></div>
          <div aria-label="flickering firefly" className="firefly"></div>
          <div aria-label="flickering firefly" className="firefly"></div>
          <div aria-label="flickering firefly" className="firefly"></div>
          <div aria-label="flickering firefly" className="firefly"></div>
          <div aria-label="flickering firefly" className="firefly"></div>
          <div aria-label="flickering firefly" className="firefly"></div>
          <div aria-label="flickering firefly" className="firefly"></div>
          <div aria-label="flickering firefly" className="firefly"></div>
          <div aria-label="flickering firefly" className="firefly"></div>
          <div aria-label="flickering firefly" className="firefly"></div>
          <div aria-label="flickering firefly" className="firefly"></div>
          <div aria-label="flickering firefly" className="firefly"></div>
          <div aria-label="flickering firefly" className="firefly"></div>
          <div aria-label="flickering firefly" className="firefly"></div>
        </div>
      )}
    </div>
  );
}
