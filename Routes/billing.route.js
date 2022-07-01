const router = require("express").Router();
const { addBillingController, billingListController,deleteBillingController, editBillingController } = require("../Controllers/billing.controller.js");
const VerifyToken = require("../VerifyToken/VerifyToken.js");

router.post("/add-billing",VerifyToken, addBillingController);
router.delete("/delete-billing",VerifyToken, deleteBillingController);
router.get("/billing-list",VerifyToken, billingListController);
router.patch("/update-billing",VerifyToken, editBillingController);

module.exports = router;