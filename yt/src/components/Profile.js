import React, { useEffect } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";

function Profile() {
    const [user, setUser] = React.useState("Not Logged In");
    const [email, setEmail] = React.useState("Not Logged In");
    const [topics, setTopics] = React.useState([]);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setIsLoggedIn(false);
            return;
        }
        axios.get("http://localhost:4000/login/isUserAuth",
            {
                headers: {
                    "x-access-token": token,
                },
            }
        )
            .then((response) => {
                setUser(response.data.user.name);
                setEmail(response.data.user.email);
                setIsLoggedIn(true);
            })
            .catch((error) => {
                console.log(error);
            });
            const data = {
                "token": token,
            }
            axios.post("http://localhost:3001/topics/all", data)
            .then((response) => {
                var temp_list = [];
                console.log(response);
                for (let i = 0; i < response.data.length; i++) {
                    var topic = response.data[i].topic;
                    temp_list.push(response.data[i].topic);
                }
                setTopics(temp_list);
            })
            .catch((error) => {
                console.log(error);
            });
            
            
    }, []);

    const unfollowTopic = (topic) => {
        const token = localStorage.getItem("token");
        alert("Unfollowing " + topic);
        var temp_list = topics.filter((t) => t !== topic);
        setTopics(temp_list);
        return;
        axios.post("http://localhost:3001/topics/delete", {token: token, topic: topic})
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }



    return (
        <div>
            <h1>Profile</h1>
            <p>Email: <b>{email}</b></p>
            <p>Username: <b>{user}</b></p>
            <h2>Topics Followed</h2>
            <Table striped bordered hover className="w-25 center">
                <tbody>
                {topics.map((topic, index) => {
                    return (
                        <tr>
                            <td key={index}>
                                <Button key={index} variant="outline-primary">{topic}</Button> 
                            </td>
                            <td>
                                <Button key={index} variant="outline-danger">Unfollow</Button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </div>
    );
}

export default Profile;