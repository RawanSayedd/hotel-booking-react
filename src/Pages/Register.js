import React from "react";
import "./Reg.css";
import HeadTitle from "../Components/HeadTitle";

function Register() {
  return (
    <div>
      <HeadTitle />
      <section className="forms top">
        <div className="container">
          <div className="sign-box">
            <p>
              Don't have an account? Create your account, it takes less than a
              minute.
            </p>
            <form>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <input
                type="password"
                name="cpassword"
                placeholder="Confirm Password"
                required
              />

              <button type="submit" className="primary-btn">
                Create an Account
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
