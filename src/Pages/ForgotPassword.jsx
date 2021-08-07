import React, { Fragment, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../components/SignInForm.css";
import { useAuth } from "../contexts/AuthContext";

function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  // const    signUpButton = () => {
  //         container.classList.add("right-panel-active");
  //     };

  //     signInButton.addEventListener('click', () => {
  //         container.classList.remove("right-panel-active");
  //     });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }

  return (
    <Fragment>
      <div className="container left-panel-active" id="container">
        <div className="form-container sign-in-container">
          {error && <h2>{error}</h2>}
          {message && <h2>{message}</h2>}

          <form onSubmit={handleSubmit} action="#">
            <h1>Password Reset</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input
              id="email"
              type="email"
              placeholder="Email"
              required
              ref={emailRef}
            />
            <button disabled={loading}>Reset Password</button>
          </form>
          <Link to="/login">Go to login</Link>
        </div>
      </div>
    </Fragment>
  );
}

export default ForgotPassword;
