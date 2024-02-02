import Header from "../Component/Header";
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function Albums() {
    let [task, settask] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
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
            <h1 style={{ textAlign: 'center' }} className='mb-3'>Album Table</h1>
            {/* <Table striped bordered hover variant="dark" style={{textAlign:'center'}}>
                <thead>
                    <tr>
                        <th>UseId</th>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        task.map((item, index) => (
                            <tr key={index}>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table> */}
            <Table striped="columns" border={2} style={{ textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {task.map((item, index) => (
                        <tr key={index}>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
