import { Form } from "react-bootstrap";
import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from 'react-bootstrap/Alert';






export default function FormComponent(){
    const [keywords, setKeywords] = useState('');
    const [response, setResponse] = useState(false);
    const [data, setData] = useState('');


    const handleSubmit = e => {
        e.preventDefault();

        const usersName = JSON.stringify({ name: keywords });

        axios.post(`http://172.104.248.42:8080/api/hello`, usersName)
            .then(res => {
                setData(res.data);
                setKeywords('');
            }
        )
        .finally(() => setResponse(true))
    }

    const handlerAgain = () => {
        setData('');
        setResponse(false)
    }

    if (response) {
        return (
            <div>
                <Alert.Heading className="mb-3">{data}</Alert.Heading>
                <Button variant="primary" onClick={handlerAgain}>Again</Button>
            </div>
        )

    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Enter your name</Form.Label>
                <Form.Control value={keywords} onChange={e => setKeywords(e.target.value)} type='text' name="name" placeholder="Name..." required/>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
}