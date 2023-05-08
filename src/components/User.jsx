import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("successfully deleted");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };

  return (
    <div>
      <h2>user count : {users.length}</h2>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email} : {user._id}
            <Link to={`/update/${user._id}`} style={{ marginLeft: "10px" }}>
              Update
            </Link>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleDelete(user._id)}
            >
              X
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default User;
