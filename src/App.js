import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Nung's CSS</h1>
        </header>
        <p className="App-intro">
          Simple Demo
        </p>
        <table>
          <tr>
            <th>ID</th>
            <td><input type='textbox' placeholder='아이디는 영문 또는 숫자'></input></td>
          </tr>
          <tr>
            <th>Password</th>
            <td><input type='textbox' placeholder='맘대로 하세요!'></input></td>
          </tr>
          <tr>
            <th>E-mail</th>
            <td><input type='textbox' placeholder='example@haok.com'></input></td>
          </tr>
        </table>
        <button>Login</button>
        <button>Exit</button>
      </div>
    );
  }
}

export default App;