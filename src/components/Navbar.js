import React, { useContext } from "react";
import { DContext } from "./context/Datacontext";


export const Navbar = () => {
  const apiurl = process.env.REACT_APP_API_URL

  const {isAuth} = useContext(DContext)


  function isLogout() {
    fetch(`${apiurl}/logout`, {
      method: "GET",
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        if (data.success === true) {
          window.location.href='/'
        }
        else {
          alert(data.message)
        }
      })
      .catch(err => {
        console.log("A newtwork error has occurred to logout", err)
        alert("A newtwork error has occurred. Please try again later.")
      })
  }




 
  return (
    <nav className="navbar navbar-dark px-5 d-flex justify-content-between  sticky-top" style={{background: "#2e86ab"}}>
      {/* Left Side - Login Button */}
      <span className="navbar-brand mb-0 h1 fw-bold text-light fs-3">I FAP</span>

      <span className="fs-6 text-light fw-bold logo-tagline">INNOVATIVE FALL CONTROL - ALERT & PREVENTION SYSTEM</span>
      {/* Right Side - Logo */}
      
      <button className="btn btn-light" onClick={isLogout}>{isAuth === false ? "Login" : "Logout"}</button>
    </nav>
  );
};


