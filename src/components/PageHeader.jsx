import { Avatar } from "@mui/material";
import React, { useContext, useState } from "react";
import SignOutModal from "../components/SignOutModal";
import "../CSS/SignOutModal.css";
import { useNavigate } from "react-router-dom";
import { GlobalState } from "../context/GlobalContext";

function PageHeader() {
  const navigate = useNavigate()
  const {user} = useContext(GlobalState);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  // const handleClose = () => setOpen(false);

  return (
    user.length ?(
      <div className="pageHeadContainer">
        <div className="headerLeft">
          <div className="pageName">Profile</div>
        </div>
        <div className="headerRight">
          <div className="logo">
            <Avatar className="profileAvatar" onClick={handleOpen}>
              <img
                style={{ width: "50px", height: "50px" }}
                src={user[0].profilepicture}
                alt=""
              />
            </Avatar>
          </div>
          <div className="userName">{user[0].name}</div>
          {open && <SignOutModal open={open} setOpen={setOpen} />}
        </div>
      </div>
    ):(navigate("/login"))
  );
}

export default PageHeader;
