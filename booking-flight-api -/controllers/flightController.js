const { Flights } = require("../models/Flight");

// get all users
exports.getFlights = async (req, res) => {
  try {
    const allFlights = Flights;
    res.status(200).json({
      message: "All Flights",
      allFlights,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// get single user
exports.getFlight = async (req, res) => {
  try {
    let title = req.params.title;
    const flight = Flights.find((flight) => flight.title === title);
    res.status(201).json({
      message: "Flight found",
      flight,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// create new user
exports.createFlight = async (req, res) => {
  try {
    const newFlight = await req.body;
    Flights.push(newFlight);
    res.status(201).json({
      message: "New Flight created",
      newFlight,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// update / edit user
exports.updateFlight = async (req, res) => {
  try {
    let title = req.params.title;
    const flight = Flights.find((flight) => flight.title === title);
    const { time, price, date } = await req.body;
    flight.time = time;
    flight.price = price;
    flight.date = date;
    res.status(200).json({
      message: "Flight updated",
      flight,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// delete user
exports.deleteFlight = async (req, res) => {
  try {
    let title = req.params.title;
    const flight = Flights.find((flight) => flight.title === title);
    Flights.splice(Flights.indexOf(flight), 1);
    res.status(200).json({
      message: "Flight deleted",
      flight,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
