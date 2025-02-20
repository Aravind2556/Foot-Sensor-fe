import React, { useState } from 'react';
import Powermange from '../../assets/undraw_medicine_hqqg.png';


export const Login = () => {
  const apiurl = process.env.REACT_APP_API_URL
 
  const [formData, setFormData] = useState({
   
    email: "",
    password: "",
    
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleLogin = (e) => {
    e.preventDefault();

    if(formData){
      
      fetch(`${apiurl}/Login-User`,{
        method : 'POST',
        headers : {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
        
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.success === true){
          window.location.href='/'
        }
        else{
          alert(data.message)
        }
      })
      .catch(err=>{
        console.log("A newtwork error has occurred to login.",err)
        alert("A newtwork error has occurred. Please try again later.")
      })
    }
    else{
      alert("data value dont decleared")
    }
  };


  return (
    <div className="Login container d-flex justify-content-center align-items-center min-vh-100 fixed">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Login</h2>
        {/* Image */}
        <img src={Powermange} alt="Login Illustration" className="img-fluid mb-3" />
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="name@example.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingEmail">Email</label>
          </div>

          {/* Password Input */}
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Login
          </button>

          {/* Links */}
          <div className="d-flex justify-content-between">

            <a href="/create-account" className="text-decoration-none">
              Create Account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

