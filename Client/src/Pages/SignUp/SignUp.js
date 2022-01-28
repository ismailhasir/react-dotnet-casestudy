import "./SignUp.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Axios from "axios";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = { email, password, firstName, lastName };
    const url = "https://localhost:5001/api/Users/Register";
    console.log(userInfo);

    fetch(url, {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        // Shorthand to check for an HTTP 2xx response status.
        // See https://fetch.spec.whatwg.org/#dom-response-ok
        const { ok, status } = response;
        if (ok) {
          // setIsSuccess(true);
          navigate("/");
          return response;
        }
        if (status === 422) {
          return response.text();
        }
        // Raise an exception to reject the promise and trigger the outer .catch() handler.
        // By default, an error response status (4xx, 5xx) does NOT cause the promise to reject!
        throw Error(response.statusText);
      })
      .then(function (response) {
        return response;
      })
      .then(function (json) {
        console.log(json);
      })
      .catch(function (error) {
        console.log("Request failed:", error.message);
      });
  };

  return (
    <>
      <div className="form">
        <h2>Sign Up Page</h2>
        <form onSubmit={handleSubmit}>
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
              type="email"
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
            <button type="submit">Gönder</button>
          </div>
          <div>
            <span>
              <Link to="/">Already have an account?/Sign In</Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
