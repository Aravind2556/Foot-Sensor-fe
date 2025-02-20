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
          console.log(data.message)
        }
      })
      .catch(err => {
        console.log("Logout deFetching error", err)
      })
  }




 
  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between sticky-top">
      {/* Left Side - Login Button */}
      <span className="navbar-brand mb-0 h1">LOGO</span>

      {/* Right Side - Logo */}
      
      <button className="btn btn-primary" onClick={isLogout}>{isAuth === false ? "Login" : "Logout"}</button>
    </nav>
  );
};


