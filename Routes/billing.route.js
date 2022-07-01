const router = require("express").Router();
const { addBillingController, billingListController } = require("../Controllers/billing.controller.js");
const VerifyToken = require("../VerifyToken/VerifyToken.js");

router.post("/add-billing",VerifyToken, addBillingController);
router.get("/billing-list",VerifyToken, billingListController);

module.exports = router;