import React from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div>
      {/* <TopBar />
      <div className="container">
        <SideBar />
        <Home />
      </div>*/}
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;
