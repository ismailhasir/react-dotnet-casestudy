import "./SignUp.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = { email, password, firstName, lastName };
    const url = "https://localhost:5001/api/Users/Register";
    console.log(userInfo);

    Axios.post(url, {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      password: userInfo.password,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form">
      <h2>Sign Up Page</h2>
      <form>
        <div className="input-container">
          <label>Name </label>
          <input
            type="text"
            name="firstName"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Lastname </label>
          <input
            type="text"
            name="lastName"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>E-Mail </label>
          <input
            type="text"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-container">
          <input type="submit" onClick={handleSubmit} />
        </div>
        <div>
          <span>
            <Link to="/">Already have an account?/Sign In</Link>
          </span>
        </div>
      </form>
    </div>
  );
}
