import React from "react";
import "./Reg.css";
import HeadTitle from "../Components/HeadTitle";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <HeadTitle />
      <section className="forms top">
        <div className="container">
          <div className="sign-box">
            <p>
              Enter your e-mail and password below to log in to your account and
              use the benefits of our website.
            </p>
            <form>
              <input type="text" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />

              <div className="flexSB">
                <div className="flex">
                  <input type="checkbox" />
                  <label>Remember Me</label>
                </div>
                <div className="flex">
                  <span>I forgot my password</span>
                </div>
              </div>

              <button type="submit" className="primary-btn">
                Sign In
              </button>
              <p>
                Don't have account? <Link to="/register">Signup!</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
