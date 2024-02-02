import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Header from "../Component/Header";

export default function Post() {

    let [task, settask] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
            <Header/>
            <h1 style={{textAlign:'center'}} className='mb-3'>Post Table</h1>
            <Table striped="columns" border={2} style={{textAlign:'center'}}>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {task.map((item, index) => (
                        <tr key={index}>
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
