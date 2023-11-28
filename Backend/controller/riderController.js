const RideDetails = require("../models/rides");
const User = require("../models/user");
exports.riderDetails = async (req, ress) => {
  await RideDetails.create({ ...req.body, code: req.uniqueCode })
    .then((res) => {
      ress.send(res);
    })
    .catch((err) => {
      ress.send(err.message);
    });
};
exports.createRide = async (req, res) => {
  try {
    const {
      driverName,
      license,
      seat,
      carno,
      carname,
      cartype,
      charge,
      from,
      to,
      driver_username,
      date,
      occupied,
      passenger,
      code,
    } = req.body;
    const user = await User.findOne({ username: driver_username });
    console.log(user);
    var driverId = null;
    const nameOfDriver = `${user.first} ${user.last}`;
    if (user) {
      driverId = user._id;
      const ride = new RideDetails({
        driverName: nameOfDriver,
        license,
        seat,
        carno,
        carname,
        charge,
        from,
        to,
        driver_username: user.username,
        date,
        passenger,
        occupied,
        code,
      });

      await ride.save();
      res.send("Ride created successfully");
    } else {
      res.send(`User with ${driver_username} does not exist`);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.rideInformation = async (req, res) => {
  const driverName = req.params.riderUsername;
  const ride = await RideDetails.findOne({ driver_username: driverName })
    .populate("passenger", "username")
    .exec();
  res.send(ride);
};

exports.passengerRideInformation = async (req, res) => {
  try {
    const passengerUserName = req.params.passengerUsername;

    // Use Mongoose query to find rides with the specified passenger username
    const rides = await RideDetails.find({})
      .populate("passenger", "username")
      .exec();
    const ridesForUsername = rides.filter((ride) =>
      ride.passenger.some(
        (passenger) => passenger.username === passengerUserName
      )
    );
    res.send(ridesForUsername);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.passengerRide = (req, ress) => {
  const query = {
    seat: { $gte: req.params.ispassengercount },
    from: req.params.isfrom,
    to: req.params.isto,
  };
  RideDetails.find(query)
    .then((res) => {
      console.log(res);
      const responseArray = Array.isArray(res) ? res : [res];
      ress.send(responseArray);
    })
    .catch((err) => {
      console.log("error", err.message);
    });
};
