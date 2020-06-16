import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="topPage">
          <h1>Check to see if you have friends</h1>
          <ul>
            <button>
              <Link className="link" to="/login">
                Login
              </Link>
            </button>
            <button>
              <Link className="link" to="/protected">
                Home Page
              </Link>
            </button>
          </ul>

          <Switch>
            <PrivateRoute exact path="/protected" component={Friends} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
