import React, { useEffect } from "react";
import axios from "axios";

function Profile() {
    const [user, setUser] = React.useState("Not Logged In");
    const [email, setEmail] = React.useState("Not Logged In");

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    useEffect(() => {
        const token = localStorage.getItem("token");
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
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div>
            <h1>Profile</h1>
            <p>Email: <b>{email}</b></p>
            <p>Username: <b>{user}</b></p>
        </div>
    );
}

export default Profile;