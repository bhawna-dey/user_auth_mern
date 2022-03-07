import styles from "./styles.module.css";
import axios from "axios";
import React, {useState, useEffect}  from "react";



const baseURL ="http://localhost:8080/api";
const  Main = () => {

  const [users, setUsers] = useState('');

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data)
      setUsers(response.data);
    });
  }, []);

  if (!users) return null;
  

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>EBook</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      {
        users && users.map(user=>{
          return(
            <div key={user._id} style={{alignItems:'center',margin:'20px 60px'}}>
            <h3>Our users</h3>
            <h4>Email:{user.email}</h4>
            <p>First Name:{user.firstName}</p>
            <p>Last Name:{user.lastName}</p>
            <br/>
            </div>
          )
        })
      }
    </div>
  );
};

export default Main;
