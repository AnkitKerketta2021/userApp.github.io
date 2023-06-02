import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar, Button } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GlobalState } from "../context/GlobalContext";
import axios from "axios";
import "../CSS/ModalContainer.css";

// ? ==================== Styling Objects Start ====================
const style = {
  position: "absolute",
  top: "42%",
  left: "85%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
};
const big_AvatarAndImgStyle = { width: "100px", height: "100px" };
const small_AvatarAndImgStyle = { width: "35px", height: "35px" };
const typographyStyle = {
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  cursor: "pointer",
};

// ? ==================== Styling Objects End ====================

function SignOutModal({ open, setOpen }) {
  const navigate = useNavigate();
  const path = useLocation().pathname.split("/")[1];
  const { user, allUser, loginUser } = useContext(GlobalState);
  const [state, setstate] = useState(user[0].name);
  const [allTheUSers, setallTheUSers] = useState();

  const handleClose = () => setOpen(false);

  // ? =============== API CALL ===============
  const fetchUserApi = async () => {
    let data = await axios.get("https://panorbit.in/api/users.json");
    setallTheUSers(data.data.users);
  };


  // ? =============== re-render on state update ===============
  useEffect(() => {
    fetchUserApi();

    setstate(user[0].name)
  }, [user,state]);

  let randomNum = (Math.random() * 10).toFixed(0);

  const switchUser = (randomNum) => {
    allTheUSers.map(
      (val, index) => val.name == allTheUSers[randomNum].name && loginUser(val)
    );

  };

  return (
    allTheUSers && (
      <div className="modalContainer">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Avatar
              style={big_AvatarAndImgStyle}
              className="signOutModalAvatar"
            >
              <img
                style={big_AvatarAndImgStyle}
                src={user[0].profilepicture}
                alt=""
              />
            </Avatar>
            <div className="modalDetail">
              <Typography id="modal-modal-title" variant="h5" component="h2">
                {state}
                <div className="userEmail">Sincere@april.biz</div>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <hr />
                <Typography sx={typographyStyle}>
                  <div>
                    <Avatar
                      style={small_AvatarAndImgStyle}
                      className="signOutModalAvatar"
                    >
                      <img
                        style={small_AvatarAndImgStyle}
                        src={user[0].profilepicture}
                        alt=""
                      />
                    </Avatar>
                  </div>
                  <div>{user[0].name}</div>
                </Typography>
                <hr />
                <Typography sx={typographyStyle}>
                  <div onClick={() => switchUser(randomNum)}>
                    <Avatar
                      style={small_AvatarAndImgStyle}
                      className="signOutModalAvatar"
                    >
                      <img
                        style={small_AvatarAndImgStyle}
                        src={
                          allTheUSers[
                            randomNum == 10 ? randomNum - user[0].id : randomNum
                          ].profilepicture
                        }
                        alt=""
                      />
                    </Avatar>
                  </div>
                  <div>
                    {
                      allTheUSers[
                        randomNum == 10 ? randomNum - user[0].id : randomNum
                      ].name
                    }
                  </div>
                </Typography>
              </Typography>
              <Link to={"/login"}>
                <Button variant="contained" color="error">
                  Sign out
                </Button>
              </Link>
            </div>
          </Box>
        </Modal>
      </div>
    )
  );
}

export default SignOutModal;
