import React, { useState } from 'react';
import {Button, Form} from "react-bootstrap";
import axios from 'axios';



function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Register Service
        // Send https request post
        const data = {
            "name": name,
            "email": email,
            "password": password
        }
        console.log(data);
        axios.post('http://localhost:4000/register', data)
        .then((response) => {
            console.log(response);
            setError("User Registered Successfully Please Login Now!");
        })
        .catch((error) => {
            console.log(error);
            setError("An Error has occured: ", error.message);
        });

    }

    return (
        <Form>
        <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control className="w-50 center" type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/>
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
        {error && <p>{error}</p>}
        </Form>
    );
}

export default RegisterForm;
