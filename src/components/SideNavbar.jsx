import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../CSS/SideNavbar.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function SideNavbar() {
  const params = useLocation();
  const [selectedOption, setselectedOption] = useState(
    params.pathname.split("/")[1]
  );
  useEffect(() => {
    setselectedOption(params.pathname.split("/")[1]);
  }, [params.pathname]);

  const updateClassList = () => {};

  return (
    <div className="sideNavigationBar">
      <div className="navContainer">
        <ul>
          <li className={selectedOption == "profile" ? "list active" : "list"}>
            <span className="marker"></span>
            <Link onClick={updateClassList} className="title" to={"/profile"}>
              <span>Profile</span>{" "}
            </Link>
            <span className="icon">
              <KeyboardArrowRightIcon />
            </span>
          </li>
          <hr />
          <li className={selectedOption == "post" ? "list active" : "list"}>
            <span className="marker"></span>
            <Link onClick={updateClassList} className="title" to={"/post"}>
              Posts
            </Link>
            <span className="icon">
              <KeyboardArrowRightIcon />
            </span>
          </li>
          <hr />
          <li className={selectedOption == "gallery" ? "list active" : "list"}>
            <span className="marker"></span>
            <Link onClick={updateClassList} className="title" to={"/gallery"}>
              Gallery
            </Link>
            <span className="icon">
              <KeyboardArrowRightIcon />
            </span>
          </li>
          <hr />
          <li className={selectedOption == "todo" ? "list active" : "list"}>
            <span className="marker"></span>
            <Link onClick={updateClassList} className="title" to={"/todo"}>
              ToDo
            </Link>
            <span className="icon">
              <KeyboardArrowRightIcon />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNavbar;
