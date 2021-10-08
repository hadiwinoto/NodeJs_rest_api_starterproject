module.exports = (app) => {

  const controller = require("../controllers/LeaveRequestController");
  const { authJwt } = require("../middleware");
 
  var router = require("express").Router();
     router.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
  });

    router.post("/create/leave",[authJwt.verifyToken],controller.createLeave);

    app.use('/api',[authJwt.verifyToken], router)
 };