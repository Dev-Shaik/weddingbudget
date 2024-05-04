"use client";

import { useEffect, useState } from "react";
import { updateExpense } from "@/app/actions";
import SubmitButton from "@/components/SubmitButton";

export default function DetailsSlider({ expense, setOpenDetailsDialog }) {
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();
  const [paidBy, setPaidBy] = useState();
  const [paymentMethod, setPaymentMethod] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    setDescription(expense.description);
    setAmount(expense.amount);
    setPaidBy(expense.paidBy);
    setPaymentMethod(expense.paymentMethod);
    setCategory(expense.category);
  }, []);

  const handleSubmit = () => {
    setOpenDetailsDialog(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action={updateExpense}>
        <div className="space-y-4">
          <input type="text" name="id" value={expense._id} hidden />
          <input
            required
            name="description"
            type="text"
            value={description}
            placeholder="Description"
            className="w-full bg-[#14004E15] p-3 rounded-md text-blue-900 "
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            required
            name="amount"
            type="Number"
            value={amount}
            placeholder="Amount"
            className="w-full bg-[#14004E15] p-3 rounded-md text-blue-900 "
            onChange={(e) => setAmount(e.target.value)}
          />
          <select
            required
            name="paidBy"
            defaultValue="habeeb"
            value={paidBy}
            className="w-full bg-[#14004E15] p-3 rounded-md text-blue-900"
            onChange={(e) => setPaidBy(e.target.value)}
          >
            <option value="habeeb">Habeeb</option>
            <option value="javeed">Javeed</option>
            <option value="zakeer">Zakeer</option>
            <option value="abba">Abba</option>
            <option value="anees">Anees</option>
            <option value="others">Others</option>
          </select>

          <select
            required
            name="paymentMethod"
            defaultValue="phonePay"
            value={paymentMethod}
            className="w-full bg-[#14004E15] p-3 rounded-md text-blue-900"
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="phonePay">PhonePay</option>
            <option value="cash">Cash</option>
          </select>

          <select
            required
            name="category"
            defaultValue="clothes"
            value={category}
            className="w-full bg-[#14004E15] p-3 rounded-md text-blue-900"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="clothes">Clothes</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="others">Others</option>
          </select>
        </div>
        <SubmitButton buttonText="Update Expense" />
      </form>
    </div>
  );
}
