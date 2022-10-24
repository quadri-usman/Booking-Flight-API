const express = require("express");

const router = express.Router();
const controller = require("../controllers/flightController");

// router.get("/", controller.getUsers);
// router.post("/", controller.createUser);
router
  .get("/", controller.getFlights)
  .get("/:title", controller.getFlight)
  .post("/", controller.createFlight)
  .put("/:title", controller.updateFlight)
  .delete("/:title", controller.deleteFlight);

module.exports = router;
