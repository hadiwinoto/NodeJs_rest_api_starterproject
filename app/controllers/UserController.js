const db = require("../models");
const user = db.user;
const Op = db.Sequelize.Op;

exports.allAccess = (req, res) => {
  user.findAll().then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      messege : err.messege || "Something Went Wrong"
    });
  });
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};