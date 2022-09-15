const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema(
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

const Income = mongoose.model("Income", incomeSchema);
module.exports = Income;
