import React, { Fragment, useRef, useState } from "react";
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
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to Sign in");
    }
    setLoading(false);
  }

  return (
    <Fragment>
      <div className="container left-panel-active" id="container">
        {/* <div class="form-container sign-up-container">
          <form onSubmit={handleSubmit} action="#">
            <h1>Create Account</h1>
            <div class="social-container">
              <a href="#" class="social">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
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
            <input
              id="password-confirm"
              type="password"
              placeholder="Password"
              required
              ref={passwordConfirmRef}
            />
            <button disabled={loading} type="submit">
              Sign Up
            </button>
          </form>
        </div> */}
        <div className="form-container sign-in-container">
          {error && <h2>{error}</h2>}

          <form onSubmit={handleSubmit} action="#">
            <h1>Sign in</h1>
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
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              ref={passwordRef}
            />
            <Link to="/forgot-password">Forgot your password?</Link>
            <button disabled={loading}>Log In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <Link to="/sign-up">
                <button className="ghost" id="signUp">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SignInForm;
