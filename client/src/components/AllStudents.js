import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";
import { Table } from 'react-bootstrap';

const AllStudents = (props) => {

    const [studentList, setStudentList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/students')
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setStudentList(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return ( 
        <div>
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Birthday</th>
                            <th>Rank</th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                        studentList.map((student, index) => (

                            <tr key={index} className='student'>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                        </tr>

                        ))
                    }    
                       
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
 
export default AllStudents;