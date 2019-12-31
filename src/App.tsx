import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Calculator from './components/Calculator/Calculator';
import Home from './components/Home/Home';
import Report from './components/Report/Report';

class App extends Component {
  state = {
    need: 0,
    maturity: 0,
  }

  saveOverallScore = (need: number, maturity: number) => {
    this.setState({
      need: need,
      maturity: maturity,
    });
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/report" >
              <Report need={this.state.need} maturity={this.state.maturity} />
            </Route>
            <Route path="/calculator">
              <Calculator handleCalculation={this.saveOverallScore}/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
