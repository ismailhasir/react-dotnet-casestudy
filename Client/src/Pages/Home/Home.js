import "./Home.css";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

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

  if (flag == true) {
    return <Navigate to="/signin" />; //COMPONENT ILE
  }
  return (
    <div className="home">
      <h3>Dashboard</h3>

      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
}
