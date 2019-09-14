import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TreeView from "./components/TreeView";
import Slider from "./components/Slider";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route path="/tree" component={TreeView} />
          <Route path="/slide" component={Slider} />
        </Router>
      </Fragment>
    );
  }
}

export default App;
