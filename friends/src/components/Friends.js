import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../App.css";

const initialFormValues = {
  name: "",
  age: "",
  email: "",
};

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/friends", formValues)
      .then((res) => {
        console.log("onSubmit -> res", res);
        setFormValues(initialFormValues);
        getData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Enter a Name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter an Age"
            name="age"
            value={formValues.age}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter an Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <button>Add</button>
        </form>
      </div>
      {friends.length ? (
        <div>
          {friends.map((friend) => (
            <div className="card" key={friend.id}>
              <p>Name: {friend.name}</p>
              <p>Age: {friend.age}</p>
              <p>Email: {friend.email}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Friends not showing up? That's what I thought... Loser...</p>
      )}
    </div>
  );
};

export default Friends;
