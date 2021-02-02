import React from "react";
import "./scss/login_form.scss";
export default function LoginForm() {
  return (
    <section className="login-form">
      <div className="form-content">
        <div className="text-center forms_header">
          <h4 className="text-center">Log In </h4>
        </div>
        <form className="container">
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="form-group">
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="Email or Phone *"
                  name="email"
                  autoFocus
                />
              </div>
              <div className="form-group">
                <input
                  required
                  type="password"
                  className="form-control"
                  placeholder="Password *"
                  name="password"
                />
              </div>
              <div className="form-group">
                <span>Remember Me</span>
                <input type="checkbox" id="remember_me" value="checked" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btnSubmit">
              Log In
            </button>
          </div>
        </form>
        <div className="text-center">
          <br />
          <a href="#">Recover Password</a>
          <small>
            <br /> OR <br />
            <a href="#">
              <u>Create a new account</u>
            </a>
          </small>
        </div>
      </div>
    </section>
  );
}
