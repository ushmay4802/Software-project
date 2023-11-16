const RideDetails = require('../models/rider'); 
exports.riderDetails = async (req, ress) => {
  await RideDetails.create({ ...req.body, code: req.uniqueCode })
    .then((res) => {
      ress.send(res);
    })
    .catch((err) => {
      ress.send(err.message);
    });
};
exports. passengerRide = (req, ress) => {
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
  }