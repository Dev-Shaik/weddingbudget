import mongoose, { Schema } from "mongoose";

const expenseSchema = new Schema(
  {
    description: String,
    amount: Number,
    paidBy: String,
    paymentMethod: String,
    category: String,
  },
  {
    timeStmaps: true,
  }
);

const Expense =
  mongoose.models.Expense || mongoose.model("Expense", expenseSchema);

export default Expense;
