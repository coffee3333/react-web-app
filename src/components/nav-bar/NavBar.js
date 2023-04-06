import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import FormComponent from './components/FormComponent';
import Modal from 'react-bootstrap/Modal';




export default function NavBar(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                        <Nav className="me-auto">
                        <Button onClick={handleShow}>Task14</Button>
                    </Nav>
                </Container>
            </Navbar>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Task 13 in DevOps interns</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormComponent/>
                </Modal.Body>
            </Modal> 
 
        </div>
    );
}