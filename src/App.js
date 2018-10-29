import React, { Component } from 'react';
import 'rc-tooltip/assets/bootstrap.css';
import './App.css';
//
import { Landing } from './Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}

export default App;
