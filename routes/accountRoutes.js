const express = require("express");
const accountController = require("../controllers/accountController");

const router = express.Router();

router
  .route("/")
  .get(accountController.getAllAccounts)
  .post(accountController.createAccount);

router.route("/:id").delete(accountController.deleteAccount);

module.exports = router;
