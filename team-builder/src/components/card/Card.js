import React from 'react';

import EditForm from './editform/EditForm';

import './Card.css'

let Card = props => {

    console.log('Card works')

    let { //Variable - keys from an object here passed from App.js through props
        name,
        email,
        role
    } = props.teamMember;

    let index = props.index; //Index of item in array (team member index or ID)


    let editClick = event => {

        let form = event.target.parentElement.querySelector('.EditForm');

        if (form.style.display === 'block') { //If you can see the edit form already... make it vanish and change the edit button's text

            form.style.display = 'none';

            event.target.textContent = 'Edit';

        } else { //If we can't see it... display it and change the Edit button's text to "Close"

            form.style.display = 'block';

            event.target.textContent = 'Close edit form';

        }

        

    }

    return (

        <div className='team-member'>

            <h2>{name}</h2>

            <p>{email}</p>

            <p>{role}</p>

            <button onClick={editClick}>Edit</button>

            <EditForm index={index} />

        </div>

    )

}

export default Card