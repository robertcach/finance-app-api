const express = require("express");
const router = express.Router();
const incomesController = require("../controllers/incomes.controller");

/* HOME */
router.get("/", (req, res, next) => res.status(200).json({ ok: true }));

/* INCOMES */
router.post("/incomes/new", incomesController.create);
router.get("/income/:id", incomesController.detail);
router.patch("/income/:id", incomesController.update);
router.delete("/income/:id", incomesController.delete);

module.exports = router;
