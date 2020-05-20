import React, { useState } from 'react';

import Form from './components/form/Form';
import Card from './components/card/Card';

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
    console.log('Step 2: (click submit to see data)')

    let editMember = (index, newInfo) => { //Called from clicking 'submit' on an EditForm - used for changing a member's info

      console.log('Edited member ' + index, 'New info: ', newInfo);

    }

  return (
    <div className="App">

      <Form teamList={teamList} setTeamList={setTeamList}/>

      {teamList.map((item, index) => <Card teamMember={item} index={index} editMember={editMember} key={index}/>)} {/* Returns all members in teamList and displays using the Card component */}

    </div>
  );
}

export default App;
