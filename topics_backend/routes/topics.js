const axios = require('axios');
var express = require("express");
var router = express.Router();
const Topic = require("../models/topic");

router.get("/validate", async (req, res) => {
  var token = req.body.token;
  const res1 = await axios.get("http://localhost:4000/login/isUserAuth", {
    headers: {
      "x-access-token": token,
    },
  });
  if (res1.data.isLoggedIn === false) {
    res.status(401).send("Please Login First");
    return;
  }
  var topic = req.body.topic;
  var result= await Topic.findOne({topic : topic});
  if(result){
    res.send("Topic Exists");
  }
  else{
    res.send("This Topic does not exist in DataBase");
  }
});

router.get("/all", async (req, res) => {
  var token = req.body.token;
  const res1 = await axios.get("http://localhost:4000/login/isUserAuth", {
    headers: {
      "x-access-token": token,
    },
  });
  if (res1.data.isLoggedIn === false) {
    res.status(401).send("Please Login First");
    return;
  }
  try {
    const topics = await Topic.find();
    res.send(topics);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/add", async (req, res) => {
  var topic = req.body.topic;
  var token = req.body.token;
  const res1 = await axios.get("http://localhost:4000/login/isUserAuth", {
    headers: {
      "x-access-token": token,
    },
  });
  if (res1.data.isLoggedIn === false) {
    res.status(401).send("Please Login First");
    return;
  }
  if(res1.data.user.email !== "admin@gmail.com"){
    res.status(401).send("You are not authorized to add a topic");
    return;
  }
  var result= await Topic.findOne({topic : topic});
  if(result){
    res.send("Topic Already Exists");
    return;
  }
  try {
    const newTopic = new Topic({
      topic: topic,
    });
    await newTopic.save();
    res.send(newTopic);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/delete", async (req, res) => {
  var topic = req.body.topic;
  var token = req.body.token;
  const res1 = await axios.get("http://localhost:4000/login/isUserAuth", {
    headers: {
      "x-access-token": token,
    },
  });
  if (res1.data.isLoggedIn === false) {
    res.status(401).send("Please Login First");
    return;
  }
  if(res1.data.user.email !== "admin@gmail.com"){
    res.status(401).send("You are not authorized to add a topic");
    return;
  }
  var result= await Topic.findOne({topic : topic});
  if(!result){
    res.send("Topic Does Not Exists");
    return;
  }
  try {
    await Topic.deleteMany({topic: topic});
    res.send("Topic Deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;