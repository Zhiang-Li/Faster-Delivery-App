import React, { Component } from "react";

import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {

  render() {

    console.log("Render AboutPage", this.props);
    return (
      <>
        <main className="form-signin w-100 m-auto">
          <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue="remember-me"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
          Remember me
              </label>
            </div>
            <Link to = "/user" className="btn btn-primary w-100 py-2">
        Sign in
            </Link>
            <>
              <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
    Sign in as
              </label>
              <select
                className="custom-select my-1 mr-sm-2"
                id="inlineFormCustomSelectPref"
              >
                <option selected="">Deliverer</option>
                <option value={1}>Poster</option>
              </select>
              <div className="custom-control custom-checkbox my-1 mr-sm-2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customControlInline"
                />
                <label className="custom-control-label" htmlFor="customControlInline">
      Remember my preference
                </label>
              </div>
            </>

          </form>
        </main>
      </>

    );
  }
}

export default App;
