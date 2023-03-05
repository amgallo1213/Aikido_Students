import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Form, Col, Row, Button } from 'react-bootstrap';


const StudentForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [startDate, setStartDate] = useState("");
    const [beltColor, setBeltColor] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const onSubmitHandler = (e) => {
    e.preventDefault();
        axios.post('http://localhost:8000/api/students/create', {
            firstName, lastName, birthdate, startDate, beltColor, email, phoneNumber
        })
        .then((res) => {
            console.log(res.data);
            navigate('/students')
        })
        .catch((err) => {
            console.log(err);
            console.log('err.response:', err.response);
            console.log('err.response.data', err.response.data)
        });
    };

    return ( 
        <div>
            <Form onSubmit={onSubmitHandler}>
                <Row>
                    <Col>
                        <Form.Control placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)}  />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}  />
                    </Col>
                </Row>
                <Button  variant="contained" type="submit">Add Student</Button> 
            </Form>
        </div>
    );
}

export default StudentForm;