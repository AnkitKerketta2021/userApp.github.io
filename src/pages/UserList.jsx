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


// ? =============== Styling Objects ===============
const headerTop_style ={
  p: 4,
  pb: 4,
  bgcolor: "#F6F6F6",
  borderRadius: "1.9rem 1.9rem 0 0",
  fontWeight: "700",
  color: "#555555",
}
const list_style ={
  mb: 2,
  height: "25rem",
  margin: "0 5%",
  maxHeight: 440,
  overflow: "auto",
}
const container_style= {
  borderBottom: "1px solid #E8E8E8",
  width: "80%",
  justifyContent: "center",
}



export default function UserList() {
  const { loginUser, allUser } = useContext(GlobalState);
  const navigate = useNavigate();
  const [userData, setuserData] = useState();

  const fetchUserApi = async () => {
    let data = await axios.get("https://panorbit.in/api/users.json");
    setuserData(data.data.users);
    allUser(data.data.users);
  };

  useEffect(() => {
    fetchUserApi();
  }, []);

  const handleuser = (id) => {
    userData.map((val, index) => id == val.id && loginUser(val));

    navigate("/profile");
  };

  loginUser == "" && navigate("/login");
  return (
    <>
      <Paper square sx={{ pb: "50px", borderRadius: "1.9rem" }}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={headerTop_style}
        >
          Select an account
        </Typography>
        <List
          sx={list_style}
          style={{ height: "440px" }}
        >
          {userData &&
            userData.map(({ id, name, profilepicture }) => (
              <div
                onClick={() => handleuser(id)}
                style={container_style}
                key={id}
              >
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={profilepicture} />
                  </ListItemAvatar>
                  <ListItemText primary={name} />
                </ListItem>
              </div>
            ))}
        </List>
      </Paper>
    </>
  );
}
