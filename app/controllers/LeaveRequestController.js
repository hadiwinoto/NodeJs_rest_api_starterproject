const db = require("../models");
const Leave = db.leave;
const Op = db.Sequelize.Op;

exports.createLeave = (req,res) => {

  const leave = {
      user_id     : req.body.user_id,
      date_start  : req.body.date_end,
      date_end    : req.body.date_end,
      reason      : req.body.reason
  };

  Leave.create(leave)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
  });


};