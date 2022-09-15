const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Required field"],
    },
    amount: {
      type: Number,
      required: [true, "Required field"],
    },
    category: {
      type: String,
      required: [true, "Required field"],
    },
    required: [true, "Required field"],
  },
  {
    timestamps: true,
  }
);

const Expense = mongoose.model("Expense", expenseSchema);
module.exports = Expense;
