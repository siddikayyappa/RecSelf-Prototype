import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import {Form} from "react-bootstrap";

function AddVideo() {
    const [url, setUrl] = useState("");
    const [topic, setTopic] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add Video Service

    }

    return (
        <Form>
        <Form.Group controlId="videoURLForm">
            <Form.Label>Video URL</Form.Label>
            <Form.Control className="w-25 center" type="text" placeholder="Enter URL" value={url} onChange={(e) => setUrl(e.target.value)} />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>
        <br></br>
        <Form.Group controlId="videoTopicForm">
            <Form.Label>Topic</Form.Label>
            <Form.Control className="w-25 center" as="select" value={topic!=null ? topic : "NULL"} placeholder='Select Topic' onChange={(e) => setTopic(e.target.value)}>
                <option value="">Select Topic</option>
                <option value="sports">Sports</option>
                <option value="music">Music</option>
                <option value="news">News</option>
                <option value="politics">Politics</option>
            </Form.Control>
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