import React from "react";
import "./TopBar.css";
import { NotificationsNone, AccountCircle, Settings } from "@material-ui/icons";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">React Dotnet CaseStudy</span>
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <AccountCircle />
          </div>
          <div className="topBarIconContainer">
            <Settings />
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFmyWM4T25zSHR1zqUoTFqNZ9GC3-zYFOwT_C1EG9HFSDnG2dQ5zU0SfmsnvxDqpa7qc&usqp=CAU"
            alt="avatar"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
