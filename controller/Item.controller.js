const db = require("../model");
const Item = db.items;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  //validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty !",
    });
    return;
  }

  //create item
  const item = {
    name: req.body.name,
    description: req.body.description,
  };

  // save item
  Item.create(item)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the tutorial.",
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  Item.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Find a single Item with an id
exports.findOne = (req, res) => {
  const { id } = req.params;

  Item.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find item with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Tutorial with id=${id}.`,
      });
    });
};

// Update a Item by the id in the request
exports.update = (req, res) => {};

// Delete a Item with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Item from the database.
exports.deleteAll = (req, res) => {};

// Find all published Item
exports.findAllPublished = (req, res) => {};
