import React, { useContext, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { GlobalState } from "../context/GlobalContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Box, Button } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CloseIcon from "@mui/icons-material/Close";
import "../CSS/ChatComponent.css";

// ? =============== Styling Objects Start ===============
const chatSubContainer_style = {
  p: 4,
  pb: 4,
  bgcolor: "#2C65C8",
  border: "2px solid #F6F6F6",
  borderRadius: "1rem 1rem 0 0",
  fontWeight: "700",
  color: "#555555",
  position: "absolute",
  left: "-20rem",
  top: "15rem",
  zIndex: 300000,
  width: 200,
};
const chatSubContainerBox_style = {
  top: "auto",
  bottom: "7.5rem",
  right: "27rem",
  width: "18rem",
  borderRadius: ".6rem .6rem 0 0",
  paddingBottom: "1.6rem",
  zIndex: 400000,
};
const closeIcon_style = {
  color: "#fff",
  float: "right",
  padding: ".8rem 0 .2rem 0",
  marginRight: "-.7rem",
  position: "relative",
  top: "8rem",
};
const chatSubContainerInsideChat_style = {
  background: "#fff",
  height: "300px",
  textAlign: "justify",
  border: "1px solid rgba(0,0,0,0.2",
  width: "97.6%",
};

const subContainerChat_style = {
  background: "#eee",
  margin: "1rem",
  padding: ".8rem",
  borderRadius: ".3rem",
};
const subContainerChatTime_style = {
  background: "#fff",
  margin: "1rem",
  textAlign: "center",
  borderRadius: ".3rem",
};
const sendIcon_style = {
  position: "absolute",
  bottom: "2.2rem",
  right: 0,
  top: "auto",
};
const subContainerHeader_style = {
  borderBottom: "1px solid #E8E8E8",
  width: "100%",
  height: "300px",
  justifyContent: "center",
  position: "absolute",
  top: "15rem",
  color: "#fff",
  zIndex: 20000000,
  left: "-21rem",
};

// ? =============== Styling Objects End ===============


export default function ChatList({ switchButtons, setswitchButtons }) {
  const { loginUser } = useContext(GlobalState);

  const navigate = useNavigate();
  const [userData, setuserData] = useState();
  const [selectedUser, setselectedUser] = useState();

  const fetchUserApi = async () => {
    let data = await axios.get("https://panorbit.in/api/users.json");
    setuserData(data.data.users);
  };

  useEffect(() => {
    fetchUserApi();
  }, []);

  const handleuser = (id) => {
    userData.map((val, index) => id == val.id && setselectedUser(val));
  };

  const handleChat = () => {
    setswitchButtons(!switchButtons);
  };
  const closeChat = () => {
    setswitchButtons(!switchButtons);
  };

  loginUser == "" && navigate("/login");
  return (
    switchButtons && (
      <div className="chatContainer" style={{}}>
        {selectedUser && (
          <div className="subChatContainer">
            <Paper square sx={{ pb: "30px" }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={chatSubContainer_style}
              >
                <Box
                  position="fixed"
                  color="primary"
                  sx={chatSubContainerBox_style}
                >
                  <Button
                    sx={{
                      zIndex: 2,
                      color: "#fff",
                      float: "left",
                      padding: ".8rem .6rem .2rem 0",
                    }}
                  ></Button>

                  <Button
                    onClick={handleChat}
                    sx={closeIcon_style}
                    className="chatIcon"
                  >
                    {switchButtons && <CloseIcon />}
                  </Button>
                  <Box
                    style={chatSubContainerInsideChat_style}
                    sx={{
                      position: "relative",
                      top: "11.8rem",
                      height: "10rem",
                    }}
                  >
                    <div
                      className="chatContainer"
                      style={{ background: "#fff" }}
                    >
                      <div style={subContainerChat_style}>
                        Lorem ipsum dolor sit amet consectetur.
                      </div>
                      <div style={subContainerChat_style}>
                        Lorem ipsum dolor sit.
                      </div>
                      <div style={subContainerChatTime_style}>9:16</div>
                      <div style={subContainerChat_style}>
                        Lorem ipsum dolor
                      </div>
                    </div>
                    <div
                      style={{
                        width: "13rem",
                        padding: "",
                        position: "relative",
                        top: "8.5rem",
                        left: "2rem",
                      }}
                    >
                      {" "}
                      <input />
                    </div>
                    <Button sx={sendIcon_style}>
                      <SendRoundedIcon />
                    </Button>
                  </Box>
                </Box>
              </Typography>
              <List
                sx={{
                  mb: 2,
                  height: "25rem",
                  margin: "0 5%",
                  maxHeight: 440,
                }}
                style={{ height: "440px" }}
              >
                <div
                  onClick={() => closeChat()}
                  style={subContainerHeader_style}
                >
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar
                        alt="Profile Picture"
                        src={selectedUser.profilepicture}
                        sx={{ scale: "85%" }}
                      />
                    </ListItemAvatar>
                    <ListItemText primary={selectedUser.name} />
                  </ListItem>
                </div>
              </List>
            </Paper>
          </div>
        )}
        <Paper square sx={{ pb: "30px", borderRadius: "1rem" }}>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{
              p: 4,
              pb: 4,
              bgcolor: "#F6F6F6",
              border: "2px solid #F6F6F6",
              borderRadius: "1rem 1rem 0 0",
              fontWeight: "700",
              color: "#555555",
            }}
          >
            <Box
              position="fixed"
              color="primary"
              sx={{
                top: "auto",
                bottom: "32.6rem",
                right: "7rem",
                width: "18rem",
                borderRadius: ".6rem .6rem 0 0",
                paddingBottom: "1.6rem",
                background: "#2C65C8",
              }}
              className="chatOption"
            >
              <Button
                sx={{
                  zIndex: 2,
                  color: "#fff",
                  float: "left",
                  padding: ".8rem .6rem .2rem 0",
                }}
                className="chatIcon"
              >
                <ModeCommentOutlinedIcon />
              </Button>
              <span
                style={{
                  fontSize: "1.1rem",
                  color: "#EBF0F9",
                  float: "left",
                  marginLeft: "-1.2rem",
                  padding: ".6rem .6rem .2rem 0",
                }}
              >
                Chats
              </span>
              <Button
                onClick={handleChat}
                sx={{
                  zIndex: 2,
                  color: "#fff",
                  float: "right",
                  padding: ".8rem 0 .2rem 0",
                  marginRight: "-.7rem",
                }}
                className="chatIcon"
              >
                {!switchButtons && <KeyboardArrowUpRoundedIcon />}
                {switchButtons && <KeyboardArrowDownRoundedIcon />}
              </Button>
            </Box>
          </Typography>
          <List
            sx={{
              mb: 2,
              height: "25rem",
              margin: "0 5%",
              maxHeight: 440,
              overflow: "auto",
            }}
            style={{ height: "440px" }}
          >
            {userData &&
              userData.map(({ id, name, profilepicture }) => (
                <div
                  onClick={() => handleuser(id)}
                  style={{
                    borderBottom: "1px solid #E8E8E8",
                    width: "100%",
                    justifyContent: "center",
                  }}
                  key={id}
                >
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar alt="Profile Picture" src={profilepicture} />
                    </ListItemAvatar>
                    <ListItemText primary={name} />
                    <span>🟢</span>
                    {/* <span></span> */}
                  </ListItem>
                </div>
              ))}
          </List>
        </Paper>
      </div>
    )
  );
}
