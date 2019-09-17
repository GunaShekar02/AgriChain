import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Keccak } from 'sha3';



class App extends Component {

componentDidMount(){
    const hash = new Keccak(256);
    hash.update('hello');
    console.log(hash.digest('hex'));
}
  render(){
    return (
      <div className="App">
        <p>Hello</p>
      </div>
    );
  }
}

export default App;
