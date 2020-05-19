import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [teamList, setTeamList] = useState( //array of objects - each object containing a team members info
    [
      {
        name: 'Jason Smith',
        email: 'jason@jason.com',
        role: 'HR Manager'
      },

      {
        name: 'Rae Smith',
        email: 'rae@rae.com',
        role: 'Best developer in history'
      },

      {
        name: 'Chevan',
        email: 'chevan@chevan.com',
        role: 'Coder & main idea guy'
      }
    ]
    );

    console.log(teamList);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
