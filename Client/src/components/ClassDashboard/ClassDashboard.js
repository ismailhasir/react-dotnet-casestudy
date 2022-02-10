import "./ClassDashboard.css";

export default function ClassDashboard() {
  let datas = ["5/B", "4/E", "9/A"];

  const handleAdd = (e) => {
    datas.push(e.target.value);
  };

  console.log(datas);
  return (
    <div className="dashboard">
      <h1>Class Management</h1>
      <div className="dashboard-add">
        <div>
          <span>Please use the 'Create' button for add a new class.</span>
          <input
            type="text"
            placeholder="Class Name"
            onSubmit={handleAdd}
          ></input>
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

            {datas.map(function (name, index) {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}

            <tr>
              <td>2</td>
              <td>b</td>
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
