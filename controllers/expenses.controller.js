const Expense = require("../models/Expense.model");

module.exports.create = (req, res, next) => {
  const expense = ({ title, amount, category } = req.body);

  Expense.create(expense)
    .then((newExpense) => res.status(200).json(newExpense))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Expense.findById(req.params.id)
    .then((expense) => res.status(200).json(expense))
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Expense.find()
    .then((expenses) => res.status(200).json(expenses))
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Expense.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedExpense) => res.status(200).json(updatedExpense))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Expense.findByIdAndRemove(req.params.id)
    .then((expenseToDelete) => res.status(200).json(expenseToDelete))
    .catch(next);
};
