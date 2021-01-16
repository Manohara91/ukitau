const db = require("../models");
const table = db.coaModel;
const Op = db.Sequelize.Op;
const apiResponser = require("./apiResponser");

//INDEX
exports.findAll = (req, res) => {
  res.send({ nama: "Krisantus Beatus Komba" });
};

//CREATE
exports.create = (req, res) => {
  // Create a Tutorial
  const tutorial = {
    olibs: req.body.olibs,
    jenis: req.body.jenis,
    pl: req.body.pl,
  };

  // Save Tutorial in the database
  table
    .create(tutorial)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

//SHOW
exports.findOne = (req, res) => {
  const id = req.params.id;

  table
    .findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};

//UPDATE / PATCH
exports.update = (req, res) => {
  const id = req.params.id;

  table
    .update(req.body, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id,
      });
    });
};

//DELETE
exports.delete = (req, res) => {
  const id = req.params.id;

  table
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id,
      });
    });
};
