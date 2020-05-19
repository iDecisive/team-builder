import React, { useState } from 'react';
import Form from './components/form/Form';
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

    console.log('Step 1:', teamList);

  return (
    <div className="App">

      <Form />

    </div>
  );
}

export default App;
