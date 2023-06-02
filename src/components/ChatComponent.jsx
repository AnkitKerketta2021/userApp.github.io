import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ChatList from "./ChatList";
import "../CSS/ChatComponent.css";

// ? =============== Styling Components Start ===============

const chatContainerStyle = {
  top: "auto",
  bottom: 0,
  right: "7rem",
  width: "18rem",
  borderRadius: ".6rem .6rem 0 0",
  paddingBottom: ".5rem",
  background: "#2C65C8",
};
const chatIconStyle = {
  zIndex: 2,
  color: "#fff",
  float: "left",
  padding: ".8rem .6rem .2rem 0",
};
const chatTextStyle = {
  fontSize: "1.1rem",
  color: "#EBF0F9",
  float: "left",
  marginLeft: "-1.2rem",
  padding: ".6rem .6rem .2rem 0",
};
const arrowIconStyle = {
  zIndex: 2,
  color: "#fff",
  float: "right",
  padding: ".8rem 0 .2rem 0",
  marginRight: "-.7rem",
};

// ? =============== Styling Components End ===============

function ChatComponent() {
  const [switchButtons, setswitchButtons] = useState(false);

  const handleChat = () => {
    setswitchButtons(!switchButtons);
  };
  return (
    <div className="chatContainerOpen">
      {!switchButtons && (
        <Box
          position="fixed"
          color="primary"
          sx={chatContainerStyle}
          className="chatOption"
        >
          <Button sx={chatIconStyle} className="chatIcon">
            <ModeCommentOutlinedIcon />
          </Button>
          <span style={chatTextStyle}>Chats</span>
          <Button onClick={handleChat} sx={arrowIconStyle} className="chatIcon">
            {!switchButtons && <KeyboardArrowUpRoundedIcon />}
            {switchButtons && <KeyboardArrowDownRoundedIcon />}
          </Button>
        </Box>
      )}
      <ChatList
        switchButtons={switchButtons}
        setswitchButtons={setswitchButtons}
      />
    </div>
  );
}

export default ChatComponent;
