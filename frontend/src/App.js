import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import "./styles/app.scss";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Login />} />
            <Route path="/Register" component={Register} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
