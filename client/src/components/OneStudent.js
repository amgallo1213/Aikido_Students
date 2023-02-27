import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const OneStudent = (props) => {
    const {id, removeFromDom} = props;
    const [studentList, setStudentList] = useState('');
    const [singleStudent, setSingleStudent] = useState([]);
    console.log('OneStudent');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/students/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setSingleStudent(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    const deleteOneStudent = (id) => {
        axios.delete(`http://localhost:8000/api/students/${id}`)
            .then(res => {
                setStudentList(studentList.filter((student)=>student._id !== id));
                navigate('students');
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return ( 
        <div>
            <div></div>
        </div>
    );
}
 
export default OneStudent;