import React, { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import {Form} from "react-bootstrap";
import axios from 'axios';


function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Login Service
        const data = {
            "email": email,
            "password": password
        }
        axios.post("http://localhost:4000/login", data)
        .then((response) => {
            console.log(response);
            localStorage.setItem("token", response.data.token);
            console.log(localStorage.getItem("token"));
            alert("User Logged in Successfully");
            // Redirect to Feed Page
            setIsLoggedIn(true);
            window.location.href = "/feed";
        })
        .catch((error) => {
            console.log(error);
            alert("An Error has occured: " +  error.message);
        });

    }

    return (
        <div>
            <h1>Login to Your account</h1>
            <Form >
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter your Email address</Form.Label>
                <Form.Control className="w-25 center" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <br></br>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Enter your Password</Form.Label>
                <Form.Control className="w-25 center" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Login
            </Button>
            </Form>
        </div>
    );
    
}

export default LoginForm;