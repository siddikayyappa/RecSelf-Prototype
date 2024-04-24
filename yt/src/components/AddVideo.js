import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import {Form} from "react-bootstrap";

function AddVideo() {
    const [url, setUrl] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add Video Service
    }

    return (
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Video URL</Form.Label>
            <Form.Control type="text" placeholder="Enter URL" value={url} onChange={(e) => setUrl(e.target.value)} />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>
        <br></br>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
            Add Video
        </Button>
        </Form>
    );
}

export default AddVideo;