import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import RequiredAuth from "./components/Auth/RequiredAtuh";
import NotRequiredAuth from "./components/Auth/NotRequiredAuth";

function App() {
  const handleLogOut = () => {
    localStorage.clear();
    // window.location.href = "./";
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/signin"
            element={
              <NotRequiredAuth>
                <SignIn />
              </NotRequiredAuth>
            }
          />
          <Route exact path="/signup" element={<SignUp />} />
          <Route
            exact
            path="/"
            element={
              <RequiredAuth>
                <>Anasayfa</>
                <button onClick={handleLogOut}>Log Out</button>
              </RequiredAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
