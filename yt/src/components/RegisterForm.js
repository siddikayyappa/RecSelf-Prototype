import React, { useState } from 'react';
import {Button, Form} from "react-bootstrap";
// Import AuthService if you have one

function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Register Service
    }

    return (
        <Form>
        <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control className="w-50 center" type="text" placeholder="Enter Name" />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>
            <br></br>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className="w-50 center"  type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>
            <br></br>
    
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className="w-50 center" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
            <br></br>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
            Register
        </Button>
        </Form>
    );
}

export default RegisterForm;
