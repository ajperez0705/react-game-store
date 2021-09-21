import React, { Fragment, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../components/SignInForm.css";
import { useAuth } from "../contexts/AuthContext";

function SignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // const    signUpButton = () => {
  //         container.classNameList.add("right-panel-active");
  //     };

  //     signInButton.addEventListener('click', () => {
  //         container.classNameList.remove("right-panel-active");
  //     });

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value.length <= 4) {
      return setError("Password needs to be more than FOUR characters");
    }
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value
      );
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <Fragment>
      <div className="container right-panel-active" id="container">
        <div className="form-container sign-up-container">
          <form className="signup-form" onSubmit={handleSubmit} action="#">
            <h1 className="signin-title">Create Account</h1>
            {/* <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div> */}
            <span className="form-suggestion">
              or use your email for registration
            </span>
            <input
              id="name"
              type="text"
              placeholder="Name"
              required
              ref={nameRef}
            />
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
              placeholder="Confirm Password"
              required
              ref={passwordConfirmRef}
            />
            <button className="form-btn" disabled={loading} type="submit">
              Sign Up
            </button>
            {error && <h2 className="form-error">{error}</h2>}
          </form>
        </div>
        <div className="form-container sign-in-container">
          {/* <form action="#">
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
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form> */}
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <Link to="/login">
                <button className="form-btn ghost" id="signIn">
                  Sign In
                </button>
              </Link>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="form-btn ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SignUp;
