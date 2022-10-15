import React, { useState } from "react";
import { Input } from "reactstrap";
import axios from "axios";

import "../../pages/Auth/Auth.css";
import Nav from "../Navigation/Nav";
import AppLoader from "../Reusables/AppLoader";

const UserAccount = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleUserSignUp = async () => {
    if (!user.email || !user.fullName || !user.phoneNumber || !user.password) {
      alert("Details are required");
      return;
    }
    setLoading(true);
    try {
      setTimeout(() => {
        sessionStorage.setItem("user", JSON.stringify({...user, role: "user"}));
        alert("user registered successfully");
        window.location.reload();
        setLoading(false);
      }, 1500);
      //   console.log(response.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleFormOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="user__account">
      <Nav />
      <div className="form__group">
        <h5>Create a User Account</h5>
        <div className="form__area">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={user.fullName}
            onChange={handleFormOnChange}
          />
        </div>
        <div className="form__area">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="john@email.com"
            value={user.email}
            onChange={handleFormOnChange}
          />
        </div>
        <div className="form__area">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="0000000000"
            value={user.phoneNumber}
            onChange={handleFormOnChange}
          />
        </div>
        <div className="form__area">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleFormOnChange}
          />
        </div>
        <div className="form__area">
          <button onClick={handleUserSignUp}>
            {loading ? <AppLoader /> : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
