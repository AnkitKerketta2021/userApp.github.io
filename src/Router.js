import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import PostsPage from "./pages/PostsPage";
import GalleryPage from "./pages/GalleryPage";
import TodoPage from "./pages/TodoPage";
import SideNavbar from "./components/SideNavbar";
import "./CSS/Router.css";
import LoginPage from "./pages/LoginPage";

function Router() {
  const pagePath = useLocation();
  let pathValue = pagePath.pathname.split("/")[1];
  let pathValue2 = pagePath.pathname;
  if (pagePath.pathname.split("/").length <= 1) {
    pathValue = "login";
  }
  return (
    <div>
      <div className="grid-container" style={{ width: "300px" }}>
        {pathValue !== "login" && pathValue2 !== "/" ? (
          <div className="item2">
            <SideNavbar />
          </div>
        ) : (
          <div style={{ display: "none" }}>
            <SideNavbar />
          </div>
        )}
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profileSwitch" element={<ProfilePage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/post" element={<PostsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default Router;
