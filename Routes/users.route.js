const router = require("express").Router();
const {usersController} = require("./../Controllers/users.controller.js");
router.get("/", usersController)

module.exports = router;