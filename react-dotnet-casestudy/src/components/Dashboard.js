import "./Dashboard.css";

function DashbBoard() {
  return (
    <form className="login-form">
      <h1>Welcome</h1>
      <label>Username:</label>
      <input type="text" />
      <label>Password:</label>
      <input type="password" />
      <button>LOGIN</button>
      <p>Forgot Username/Password?</p>
    </form>
  );
}

export default DashbBoard;
