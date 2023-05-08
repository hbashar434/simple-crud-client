import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const updatedUser = { name, email };

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("updated successfully");
          form.reset();
        }
      });
  };
  return (
    <div>
      <h2>update information of : {loadedUser.name}</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" defaultValue={loadedUser?.name} name="name" />
        <br />
        <input type="email" defaultValue={loadedUser?.email} name="email" />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
