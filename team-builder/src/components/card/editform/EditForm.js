import React, { useState } from 'react';

import './EditForm.css';

let EditForm = props => { //props takes in the teamList data and the setTeamList function - aka you have access to those here

    let index = props.index; //Team list and func to set the team list passed down from App.js through props

    let [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            role: ''
        }
    );

    let inputChange = event => { //Called whenever a user types/interacts with the form. Will set the formData to the input

        setFormData(
            {
            ...formData, //Copy of current form data
            [event.target.name]: event.target.value
            }
        );

    }

    let submitForm = event => { //function to submit the form

        event.preventDefault();

        console.log('Clicked submit on an edit form');

    }

    return (

        <form className='EditForm' onSubmit={event => submitForm(event)}>

            <label>
                Name
                <input type='text' name='name' value={formData.name} placeholder='John Smith' onChange={event => inputChange(event)}></input>
            </label>

            <label>
                Email
                <input type='text' name='email' value={formData.email} placeholder='john@email.com' onChange={event => inputChange(event)}></input>
            </label>

            <label>
                Role
                <input type='text' name='role' value={formData.role} placeholder='Cool person' onChange={event => inputChange(event)}></input>
            </label>

            <button>Submit</button>

        </form>

    )

}

export default EditForm;