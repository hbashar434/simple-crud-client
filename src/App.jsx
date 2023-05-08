import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAddUser = (e) => {
    e.preventDefault();
    const user = { name, email };
    console.log(user);

    // Reset the form fields
    // setName("");
    // setEmail("");

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("user added successfully");
          setName("");
          setEmail("");
        }
      });
  };

  return (
    <>
      <h1>SIMPLE CRUD</h1>
      <form onSubmit={handleAddUser}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}

export default App;
