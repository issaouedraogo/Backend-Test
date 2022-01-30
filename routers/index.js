const express = require("express");
const router = express.Router();

// Load each controller
const itemRouter = require("./item.router");

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use("/item", itemRouter);

module.exports = router;
