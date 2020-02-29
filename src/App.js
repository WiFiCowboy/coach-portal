import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/nav'
import IconBar from './components/iconBar'
import Home from './components/Home'
import store from './store';
import './App.css';
import { Component } from 'react';



export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = store
  // }
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <IconBar />
          <Switch>
            <Route path="/coach-portal" exact component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }

}


