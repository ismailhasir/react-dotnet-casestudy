import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const loginInfo = { email, password };
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    fetch("https://localhost:5001/api/user/Login", {
      //API'ye giris icin request atiyorum.
      method: "POST",
      body: JSON.stringify(loginInfo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        const { ok, status } = response;
        if (ok) {
          navigate("/");
          //giris basarili olursa(200 donerse),anasayfaya donecegiz.
          return response;
        }
        if (status === 422) {
          return response.text();
        }

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

  //};
  return (
    <div className="form">
      <h2>Login Page</h2>
      <form>
        <div className="input-container">
          <label>E-Mail </label>
          <input
            type="text"
            name="uname"
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
          <input type="submit" onClick={handleLogin} />
        </div>
        <div>
          <span>
            <Link to="/signup">Don't have an account?/Sign Up</Link>
          </span>
        </div>
      </form>
    </div>
  );
}
