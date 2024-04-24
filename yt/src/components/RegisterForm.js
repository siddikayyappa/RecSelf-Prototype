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
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>
            <br></br>
    
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
            <br></br>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
            Register
        </Button>
        </Form>
    );
}

export default RegisterForm;
