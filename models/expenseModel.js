import mongoose, { Schema } from "mongoose";
import { type } from "os";

const expenseSchema = new Schema(
  {
    description: String,
    amount: Number,
    paidBy: String,
    paymentMethod: String,
    category: String,
    mode: String,
    createdDate: {
      type: Date,
      default: Date(),
    },
  },
  {
    timestamps: true,
  }
);

const Expense =
  mongoose.models.Expense || mongoose.model("Expense", expenseSchema);

export default Expense;
