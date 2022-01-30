const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./model");

const corsOption = {
  origin: "http://localhost:8081",
};

// app.use(cors(corsOption));

// Parse requests of content-type -- application/json
app.use(express.json());

//Parse requests of content-type - application/x-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// calling Sync to connect the database
async function syncDB() {
  try {
    await db.sequelize.sync({ force: false });
    console.log("Database connected");
  } catch (error) {
    console.error("error synching database", error);
  }
}
syncDB();

// for development you may want to drop exiting table and re-sync database. just use this force : true
// await db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-syn db");
// });

//sample route
app.get("/", (req, res) => {
  res.json({ message: "Welcome you backend is up" });
});

app.use("/api/v1", require("./routers"));

// set port and listen for the request
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
