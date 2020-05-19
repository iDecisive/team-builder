import React, { useState } from 'react';

let Form = props => { //props takes in the teamList data and the setTeamList function - aka you have access to those here

    console.log('Step 2: (click submit to see data)')

    let { teamList, setTeamList } = props; //Team list and func to set the team list passed down from App.js through props

    let [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            role: ''
        }
    );

    let inputChange = event => { //Called whenever a user types/interacts with the form. Will set the formData to the input

        console.log('Just gave input');

    }

    let submitForm = event => { //function to submit the form

        event.preventDefault();


        console.log(formData)

    }

    return (

        <form onSubmit={event => submitForm(event)}>

            <label>
                Name
                <input type='text' name='name' placeholder='John Smith' onChange={event => inputChange(event)}></input>
            </label>

            <label>
                Email
                <input type='text' name='email' placeholder='john@email.com' onChange={event => inputChange(event)}></input>
            </label>

            <label>
                Role
                <input type='text' name='role' placeholder='Cool person' onChange={event => inputChange(event)}></input>
            </label>

            <button>Submit</button>

        </form>

    )

}

export default Form;