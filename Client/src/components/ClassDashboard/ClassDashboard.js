import "./ClassDashboard.css";
import { useState } from "react";

export default function ClassDashboard() {
  const [classList, setClassList] = useState([
    { id: 1, title: "1/A", population: 20 },
    { id: 2, title: "3/B", population: 16 },
    { id: 3, title: "4/C", population: 33 },
  ]);

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [population, setPopulation] = useState("");

  const resetForm = () => {
    setTitle("");
    setPopulation("");
  };

  const handleAdd = (e) => {
    setClassList((prevClasses) => {
      return [...prevClasses, e];
    });
  };

  const handleCreate = (e) => {
    const addedClass = {
      id: classList.length + 1,
      title: title,
      population: population,
    };
    console.log(addedClass);
    handleAdd(addedClass);
    resetForm();
  };

  const handleDelete = (id) => {
    setClassList(
      classList.filter((item) => {
        return id !== item.id;
      })
    );
  };

  return (
    <div className="dashboard">
      <h1>Class Management</h1>
      <div className="dashboard-add">
        <label>
          <span>Sinif Adi</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required="required"
          ></input>
          <span>Sinif Mevcudu</span>
          <input
            type="number"
            onChange={(e) => setPopulation(e.target.value)}
            value={population}
            required="required"
          ></input>
        </label>
        <button onClick={handleCreate}>Create</button>
      </div>

      <div className="dashboard-container">
        <div className="dashboard-container-label">
          <table>
            <tr>
              <th>ID</th>
              <th>Sinif Adi</th>
              <th>Sinif Mevcudu</th>
              <th>Action</th>
            </tr>

            {classList.map(function (item, index) {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.population}</td>
                  <td>
                    <button>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
