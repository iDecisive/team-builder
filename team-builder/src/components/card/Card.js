import React from 'react';

import './Card.css'

let Card = props => {

    console.log('Card works')

    let { //Variable - keys from an object here passed from App.js through props
        name,
        email,
        role
    } = props.teamMember;

    return (

        <div className='team-member'>

            <h2>{name}</h2>

            <p>{email}</p>

            <p>{role}</p>

            <button>Edit</button>

        </div>

    )

}

export default Card