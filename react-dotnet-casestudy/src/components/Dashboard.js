import "./Dashboard.css";

export default function Dashboard(props) {
  return (
    <div className="dash">
      <h2>Welcome</h2>
      <h3>Username:{props.name}</h3>
      <h3>Password:{props.password}</h3>
      <button>LOGIN</button>
      <p>Forgot Username/Password?</p>
    </div>
  );
}
