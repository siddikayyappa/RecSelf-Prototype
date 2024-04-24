// Write a react component to display emebeds from URLs like a feed

// Path: src/components/Feed.js 
import axios from 'axios';
import React, { useEffect } from 'react';

function Feed() {
    const [user, setUser] = React.useState(null);
    const [urlList, setUrlList] = React.useState(["https://www.youtube.com/embed/mrdRHsIkK_c", "https://t.co/xCQbRWzgHl", "https://www.dailymotion.com/embed/video/x8xdcd0", "https://t.co/ffKnsVKwG4"]);
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
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    return (
        <div>
            <h1>Feed Personalised For <br></br><b>{user}</b></h1>
            {
                urlList.map((url, index) => {
                    return (
                        <div  key={index}>
                            <iframe width="700" height="400"  src={url} title
                                ={index}></iframe>
                            <br></br>
                            <p>
                            Topic: Songs
                            </p>
                            <br></br>
                            <br></br>
                            <br></br>

                        </div>
                    );
                }
                )
            }
        </div>
    );
}

export default Feed;
