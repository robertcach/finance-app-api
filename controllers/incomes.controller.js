const Income = require("../models/Income.model");

module.exports.create = (req, res, next) => {
  const income = ({ title, amount, category } = req.body);
  console.log(income);

  Income.create(income)
    .then((newIncome) => res.status(200).json(newIncome))
    .catch(next);
};
