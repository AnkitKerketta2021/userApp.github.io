import  React, { useContext } from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import UserList from "./UserList";
import "../CSS/LoginPage.css";
import { GlobalState } from "../context/GlobalContext";

// ? =============== Styling Objects ===============
let loginPage_Style = {
  width: "40vw",
  height: "700px",
  margin: "1rem 60% 30% 70%",
};
let loginPage_Style2 = {
  width: "100vw",
  position: "absolute",
  zIndex: "-1",
  left: "0",
  top: "5rem",
  scale: "160%",
};

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function LoginPage(props) {
  return (
    <div style={loginPage_Style}>
      <div style={loginPage_Style2}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#5000ca"
            fill-opacity="1"
            d="M0,64L26.7,96C53.3,128,107,192,160,197.3C213.3,203,267,149,320,160C373.3,171,427,245,480,240C533.3,235,587,149,640,133.3C693.3,117,747,171,800,213.3C853.3,256,907,288,960,304C1013.3,320,1067,320,1120,309.3C1173.3,299,1227,277,1280,234.7C1333.3,192,1387,128,1413,96L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
          ></path>
        </svg>
      </div>
      <Toolbar id="back-to-top-anchor" />
      <Container sx={{ height: "300px" }}>
        <Box sx={{ my: 2 }}>
          <UserList />
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}
