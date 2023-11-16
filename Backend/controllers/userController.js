const User = require("../models/user");
exports.userDetail = async (req, ress) => {
  const user = req.params.username;
  User
    .find({ username: user })
    .then((res) => {
      ress.send(res);
    })
    .catch((error) => {
      ress.send(error);
    });
};
exports.login = async (req, ress) => {
  await User
    .create(req.body)
    .then((res) => {
      ress.send(res);
    })
    .catch((err) => {
      ress.status(500).json({ error: "Internal Server Error" });
    });
};
