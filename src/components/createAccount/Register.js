import React, { useState } from "react";
import Medicneimage from '../../assets/register.svg';

export const Register = () => {
  const apiurl = process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    contact: "",
    dob: "",
    age: "",
    password: "",
    confirmPassword: "",
    userType: "user",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "dob") {
      setFormData((prev) => ({
        ...prev,
        dob: value,
        age: calculateAge(value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const calculateAge = (dob) => {
    if (!dob) return "";
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age > 0 ? age : "";
  };

  const handleRegister = (e) => {
    e.preventDefault();
    fetch(`${apiurl}/Create-Account`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => {
        if(data.success === true){
          window.location.href='/'
        }
        else{
          alert(data.message)
        }
      })
      .catch(err => {
        console.error("A newtwork error has occurred to Register", err);
        alert("A newtwork error has occurred. Please try again later.")
      });
  };

  return (
    <div className="container_Register container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row w-100  rounded">
        {/* Left Column - Image */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src={Medicneimage} alt="Medicine" className="img-fluid w-75" />
        </div>
        {/* Right Column - Form */}
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h2 className="text-center mb-4">Register</h2>
            <form onSubmit={handleRegister}>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <label>Name</label>
              </div>
              <div className="mb-3">
                <label className="form-label">Gender</label>
                <div className="d-flex gap-3">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} required />
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} required />
                    <label className="form-check-label">Female</label>
                  </div>
                </div>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <label>Email</label>
              </div>
              <div className="form-floating mb-3">
                <input type="tel" className="form-control" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} required />
                <label>Contact</label>
              </div>
              <div className="form-floating mb-3">
                <input type="date" className="form-control" name="dob" value={formData.dob} onChange={handleChange} required />
                <label>Date of Birth</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" name="age" value={formData.age} readOnly />
                <label>Age</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                <label>Password</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
                <label>Confirm Password</label>
              </div>
              <button type="submit" className="btn btn-info w-100 mb-3">Register</button>
              <div className="text-center">
                <p>Already have an account? <a href="/" className="text-decoration-none text-info">Go to login</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
