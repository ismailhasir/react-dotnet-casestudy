import "./Home.css";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import ClassDashboard from "../../components/ClassDashboard/ClassDashboard";
import TopBar from "../../components/TopBar/TopBar";
import SideBar from "../../components/SideBar/SideBar";

export default function Home() {
  const [flag, setFlag] = useState(false);

  const checkAuth = () => {
    //BURAYA TEKRAR BAK.
    const auth = localStorage.getItem("auth");
    if (auth) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  const handleLogOut = () => {
    localStorage.clear();
    checkAuth();
  };

  useEffect(() => {
    checkAuth();
  }, []);

  if (flag === true) {
    return <Navigate to="/signin" />; //COMPONENT ILE
  }
  return (
    <div className="home">
      <TopBar />
      <div className="home-main">
        <SideBar />
        <ClassDashboard />
      </div>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
}
