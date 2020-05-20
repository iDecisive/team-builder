import React from 'react';

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

        </div>

    )

}

export default Card