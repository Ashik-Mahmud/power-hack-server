const router = require("express").Router();
const { addBillingController } = require("../Controllers/billing.controller.js");
const VerifyToken = require("../VerifyToken/VerifyToken.js");

router.post("/add-billing",VerifyToken, addBillingController);

module.exports = router;