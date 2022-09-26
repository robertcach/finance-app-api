const express = require("express");
const router = express.Router();
const incomesController = require("../controllers/incomes.controller");
const expensesController = require("../controllers/expenses.controller");

/* HOME */
router.get("/", (req, res, next) => res.status(200).json({ ok: true }));

/* INCOMES */
router.post("/income/new", incomesController.create);
router.get("/income/:id", incomesController.detail);
router.patch("/income/:id", incomesController.update);
router.delete("/income/:id", incomesController.delete);

/* EXPENSES */
router.post("/expense/new", expensesController.create);
router.get("/expense/:id", expensesController.detail);
router.get("/expenses", expensesController.list);
router.patch("/expense/:id", expensesController.update);
router.delete("/expense/:id", expensesController.delete);

module.exports = router;
