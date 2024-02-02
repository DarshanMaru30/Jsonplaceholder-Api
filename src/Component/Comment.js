import Header from "../Component/Header";
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function Comment() {
    let [task, settask] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
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
            <h1 style={{ textAlign: 'center' }} className='mb-3'>Comment Table</h1>
            <Table striped bordered hover variant="dark" style={{textAlign:'center'}}>
                <thead>
                    <tr>
                        <th>PostId</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        task.map((item, index) => (
                            <tr key={index}>
                                <td>{item.postId}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
