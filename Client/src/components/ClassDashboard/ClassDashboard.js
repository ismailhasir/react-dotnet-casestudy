import "./ClassDashboard.css";
import { useState } from "react";

export default function ClassDashboard() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState();

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    });

  return (
    <div className="dashboard">
      <h1>Class Management</h1>
      <div className="dashboard-add">
        <div>
          <span>Please use the 'Create' button for add a new class.</span>
          <input type="text" placeholder="Class Name"></input>
        </div>
        <button>Create</button>
      </div>

      <div className="dashboard-container">
        <div className="dashboard-container-label">
          <table>
            <tr>
              <th>ID</th>
              <th>Class Name</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>{data[0].id}</td>
              <td>{data[0].name}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>{data[1].id}</td>
              <td>{data[1].name}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>{data[2].id}</td>
              <td>{data[2].name}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
