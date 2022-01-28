import { useState, useEffect } from "react";

export default function TeacherList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  });
  return (
    <div>
      <h2>Ogretmen Listesi</h2>
      {users.map((user) => (
        <p>
          {user.id} - {user.name}
        </p>
      ))}
    </div>
  );
}

