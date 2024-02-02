import Header from "../Component/Header";
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Container, Row } from "react-bootstrap";

export default function Photo() {
    let [task, settask] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(function (response) {
                console.log(response.data);
                settask(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    })
    return (
        <div>
            <Header />
            <h1 style={{ textAlign: 'center' }} className='mb-3'>Photos Card</h1>
            <Container>
                <Row className="g-2">
                    {
                        task.map((item, index) => (
                            <Col className="col-md-4 col-sm-2">
                                <Card style={{ width: '18rem' }} key={index}>
                                    <Card.Img variant="top" src={item.thumbnailUrl} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>{item.albumId}</ListGroup.Item>
                                        <ListGroup.Item>{item.id}</ListGroup.Item>
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link href={item.url}>Card Link</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}
