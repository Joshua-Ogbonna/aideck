import React from "react";
import Nav from "../../components/Navigation/Nav";

const Login = () => {
  return (
    <>
      <Nav />
      <div className="login__component user__account">
        <div className="form__group">
          <h5>Login to your Aideck Account</h5>
          <div className="form__area">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email Address" />
          </div>
          <div className="form__area">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="***********" />
          </div>
          <div className="form__area">
            <button>Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
