import "./SignIn.css";
import { Link } from "react-router-dom";
export default function SignIn() {
  return (
    <div className="form">
      <h2>Login Page</h2>
      <form>
        <div className="input-container">
          <label>E-Mail </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
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
