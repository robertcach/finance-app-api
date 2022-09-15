const express = require("express");
const router = express.Router();
const incomesController = require("../controllers/incomes.controller");

router.get("/", (req, res, next) => res.status(200).json({ ok: true }));
router.post("/incomes/new", incomesController.create);

module.exports = router;
