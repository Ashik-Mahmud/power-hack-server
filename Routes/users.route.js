const router = require("express").Router();
const { usersRegisterController} = require("./../Controllers/users.controller.js");
router.post("/register", usersRegisterController)
router.get("/login", usersRegisterController)

module.exports = router;