const User = require("../models/user");
exports.userDetail = async (req, ress) => {
  const user = req.params.username;
  User.find({ username: user })
    .then((res) => {
      ress.send(res);
    })
    .catch((error) => {
      ress.send(error);
    });
};
exports.login = async (req, res) => {
  await User.create(req.body)
    .then((res) => {
      ress.send(res);
    })
    .catch((err) => {
      ress.status(500).json({ error: "Internal Server Error" });
    });
};
exports.createUser = async (req, res) => {
  try {
    const {
      first,
      last,
      username,
      password,
      dob,
      phone,
      email,
      gender,
      totalKmTravelled,
    } = req.body;
    const user = new User({
      first: first,
      last: last,
      username: username,
      password: password,
      dob: Date.parse(dob),
      phone: phone,
      email: email,
      gender: gender,
      totalKmTravelled: totalKmTravelled,
    });
    const savedUser = await user.save();
    console.log("user saved successfully");
    res.send("user saved successfully")
  } catch (error) {
    console.log("An error occured while saving user");
    console.log(error);
    res.send("An error occured while saving user"); 
  }
};
