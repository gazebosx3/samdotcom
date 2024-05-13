import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, useMediaQuery } from "@mui/material";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";

type HomeProps = { isHome: boolean };
// easing={'ease-out'}
//       {/* <Slide direction="left"  timeout={1500} in={true} mountOnEnter unmountOnExit> */}

export default function Home({ isHome }: HomeProps) {
    const matches = useMediaQuery('(min-width:600px)');

  return (
    <div style={ !isHome && matches ? {position: 'fixed', top: 10}: {}}>
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Link style={{ color: "#213547" }} to={"/"}>
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
            <Typography variant="h6" gutterBottom>
              🖥️🙇🏻🏙️
            </Typography>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        )}
        <div>
          <Link to={"About"}>
            <Button>About</Button>
          </Link>
          <Link to={"Experience"}>
            <Button>Experience</Button>
          </Link>
        </div>
      </Box>
    </div>
  );
}
