import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <div className="forgot-form-logo">
              <img src="assets\\images\\tauk-logo.png" alt="form-logo" className="forgot-logo-img "/>
      </div>
      <div className="forgot_outer">
        <img
          src="assets\\images\\login-bg.png"
          alt="login-bg"
          className="forgot-bg-img"
        />
        <div className="forgot-form-outer">
          <div className="forgot-form-inner">
            <div className="forgot-form-item">
              <p className="icon">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.3332 17H5.6665M5.6665 17L14.1665 8.5M5.6665 17L14.1665 25.5"
                    stroke="#111827"
                    stroke-width="2.125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
              <h2>Forgot password?</h2>
              <p>
                Please enter your email address to receive a password reset
                link.
              </p>
              <form action="">
                <label>Email address</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter email address"
                  className="forgot-emailtext"
                />
                <button type="button">Get link</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
