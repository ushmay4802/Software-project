const Admin = require("../models/admin");

exports.confirmRide = async (req,ress) =>{



    const confirmData = {
        Driver : req.body.driverUsername,
Passenger: req.body.passengerUsername,
From: req.body.from,
To: req.body.to,
Date: req.body.date,
TotalPassenger: req.body.passenger,
DistanceTravelled: req.body.distance,
Amount: req.body.amount,
    }

    await Admin.create(confirmData)
    .then((res)=>{
        console.log(res);
        ress.send(res);
    })
    .catch((err)=>{
        ress.send(err);
    });
}