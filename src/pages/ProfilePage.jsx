import React, { useContext, useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import "../CSS/ProfilePage.css";
import { Avatar } from "@mui/material";
import "../CSS/Router.css";
import { GlobalState } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import MapComponent from "../components/MapComponent";
import ChatComponent from "../components/ChatComponent";

// ? =============== Styling Objects ===============
const profileSection_Style ={ marginLeft: "4rem", marginTop: "rem" }
const avatar_Style ={ width: "200px", height: "200px" }
const details1_Style ={
  fontSize: "1.6rem",
  fontWeight: "500",
  color: "#646464",
}

function ProfilePage() {
  const navigate = useNavigate();
  const context = useContext(GlobalState);
  const { user } = context;
  const [selectedUser, setselectedUser] = useState(context);

  useEffect(() => {
    user.length == 0 ? navigate("/login") : navigate("/profile");

  }, [selectedUser, user]);

  return selectedUser.user.length ? (
    <div className="basePageContainer">
      <PageHeader />
      <hr />
      <div className="profilePageDetails">
        <div className="profilePageLeftSection">
          <div className="profilePageContent">
            <div
              className="profileLeftSection"
              style={profileSection_Style}
            >
              <Avatar
                style={avatar_Style}
                className="profilePageAvatar"
              >
                <img
                  style={avatar_Style}
                  src={user[0].profilepicture}
                  alt=""
                />
              </Avatar>
              <div className="details1">
                <div
                  className="title"
                  style={details1_Style}
                >
                  {user[0].name}
                </div>
                <div className="detailSection1">
                  <div>Username</div>
                  <div>:</div>
                  <b>{user[0].username}</b>
                  <div>e-mail</div>
                  <div>:</div>
                  <b>{user[0].email}</b>
                  <div>Phone</div>
                  <div>:</div>
                  <b>{user[0].phone}</b>
                  <div>Website</div>
                  <div>:</div>
                  <b>{user[0].website}</b>
                </div>
              </div>
              <hr />
              <div className="details2">
                <div className="title2">Company</div>
                <div className="detailSection2">
                  <div>Name</div>
                  <div>:</div>
                  <b>{user[0].company.name}</b>
                  <div>catchphrase</div>
                  <div>:</div>
                  <b>{user[0].company.catchPhrase}</b>
                  <div>bs</div>
                  <div>:</div>
                  <b>{user[0].company.bs}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="midDividerLine">
          <span>
            <hr />
          </span>
        </div>
        <div className="profilePageRightSection">
          <div className="profileRightSection">
            <div className="details3">
              <div className="title3">Address</div>
              <div className="detailSection3">
                <div>Street</div>
                <div>:</div>
                <b>{user[0].address.street}</b>
                <div>Suite</div>
                <div>:</div>
                <b>{user[0].address.suite}</b>
                <div>City</div>
                <div>:</div>
                <b>{user[0].address.city}</b>
                <div>Zipcode</div>
                <div>:</div>
                <b>{user[0].address.zipcode}</b>
              </div>
            </div>
            <div className="map">
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
      <ChatComponent />
    </div>
  ) : (
    navigate("/login")
  );
}

export default ProfilePage;
