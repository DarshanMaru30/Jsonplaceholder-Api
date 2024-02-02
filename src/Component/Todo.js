import Header from "../Component/Header";
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function Comment() {
    let [task, settask] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(function (response) {
                console.log(response.data);
                settask(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    return (
        <div>
            <Header />
            <h1 style={{ textAlign: 'center' }} className='mb-3'>Todo Table</h1>
            <Table striped bordered hover variant="dark" style={{textAlign:'center'}}>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        task.map((item, index) => (
                            <tr key={index}>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.completed ? "true" : "false"}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
