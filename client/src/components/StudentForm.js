import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const StudentForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [startDate, setStartDate] = useState("");
    const [beltColor, setBeltColor] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
            axios.post('http://localhost:8000/api/students/create', {
                firstName, lastName, birthdate, startDate, beltColor
            })
            .then((res) => {
                console.log(res.data);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                console.log('err.response:', err.response);
                console.log('err.response.data', err.response.data)
            });
    };



    return ( 
        <div></div>
    );
}
 
export default StudentForm;props