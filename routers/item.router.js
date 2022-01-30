const express = require("express");
const router = express.Router();
const itemControllers = require("../controller/Item.controller");

// Create a new Tutorial
router.post("/", itemControllers.create);

// Retrieve all Tutorials
router.get("/", itemControllers.findAll);

// Retrieve a single Tutorial with id
router.get("/:id", itemControllers.findOne);

//   // Retrieve all published Tutorials
//   router.get("/published", tutorials.findAllPublished);

//   router.get("/:id", tutorials.findOne);

//   // Update a Tutorial with id
//   router.put("/:id", tutorials.update);

//   // Delete a Tutorial with id
//   router.delete("/:id", tutorials.delete);

//   // Create a new Tutorial
//   router.delete("/", tutorials.deleteAll);

module.exports = router;
