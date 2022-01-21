import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../components/SignInForm.css";
import { useAuth } from "../contexts/AuthContext";

function SignInForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function signIn(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to Sign in");
    }
    setLoading(false);
  }

  async function guestLogin(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login("guest@email.com", "Password123");
      history.push("/");
    } catch {
      setError("Failed to Sign in");
    }
    setLoading(false);
  }

  return (
    <div className="auth-container">
      <div className="container left-panel-active" id="container">
        <div className="form-container sign-in-container">
          {error && <h2>{error}</h2>}

          <form className="signin-form" action="#">
            <h1 className="signin-title">Sign in</h1>

            <span className="form-suggestion">or use your account</span>
            <input
              id="email"
              type="email"
              placeholder="Email"
              required
              ref={emailRef}
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              ref={passwordRef}
            />
            {/* <Link className="password-forget" to="/forgot-password">
              Forgot your password?
            </Link> */}
            <button className="form-btn" disabled={loading} onClick={signIn}>
              Log In
            </button>
            <button
              className="form-btn"
              disabled={loading}
              onClick={guestLogin}
            >
              Guest Login
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="form-btn ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <Link to="/sign-up">
                <button className="form-btn ghost" id="signUp">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
