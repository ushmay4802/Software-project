const user = require("../models/user");
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

exports.register = async (req, res) => {
  await User.create(req.body)
    .then((ress) => {
      res.send(ress);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
};

exports.token = async (req, res) => {
  await User.updateOne({ username: req.body.username }, { $inc: { wallet: req.body.amount } })
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
}
