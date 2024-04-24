const axios = require('axios');
var express = require("express");
var router = express.Router();
const User = require("../models/user");


router.post("/update", async (req, res) => {
  var preferences = req.body.preferences;
  var token=req.body.token;
  console.log(preferences);
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
//   userId = req.body.user_id;
userId = res1.data.user._id;
  try {
    const user = await User.findById(userId);
    user.preferences = preferences;
    await user.save();
    res.send(user);
    } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
    }
});

module.exports = router;