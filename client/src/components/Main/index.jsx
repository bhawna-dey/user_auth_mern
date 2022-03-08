import styles from "./styles.module.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

const baseURL = "http://localhost:8080/api";
const Main = () => {
  const [showUser, setShowUser] = useState(false);
  const onClick = () => setShowUser(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>EBook</h1>
        <button className={styles.white_btn} onClick={onClick}>
          User Details
        </button>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      {showUser ? <User /> : null}
    </div>
  );
};

const User = () => {
  const [users, setUsers] = useState("");

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  }, []);
 return(
  users &&
    users.map((user) => {
      return (
        <div
        
          key={user._id}
          style={{ alignItems: "center", margin: "20px 60px" }}
        >
          <h4>Email:{user.email}</h4>
          <p>First Name:{user.firstName}</p>
          <p>Last Name:{user.lastName}</p>
          <br />
        </div>
      );
    })
 );
};

export default Main;
