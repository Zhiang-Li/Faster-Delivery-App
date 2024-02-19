import React, { Component } from "react";

import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {

  render() {

    console.log("Render AboutPage", this.props);
    return (
      <div className="App">
        <h1>Log In As</h1>
        <div>
          <div>
            <Link to="/user" className="btn btn-primary" style={{ marginRight: "50px" }}>Poster</Link>
            <Link to="/user" className="btn btn-primary">Deliverer</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
