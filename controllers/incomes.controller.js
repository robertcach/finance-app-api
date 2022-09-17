const Income = require("../models/Income.model");

module.exports.create = (req, res, next) => {
  const income = ({ title, amount, category } = req.body);

  Income.create(income)
    .then((newIncome) => res.status(200).json(newIncome))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Income.findById(req.params.id)
    .then((income) => res.status(200).json(income))
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Income.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedIncome) => res.status(200).json(updatedIncome))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Income.findByIdAndRemove(req.params.id)
    .then((incomeToDelete) => res.status(200).json(incomeToDelete))
    .catch(next);
};
