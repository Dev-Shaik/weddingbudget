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
  const [mode, setMode] = useState();

  useEffect(() => {
    setDescription(expense.description);
    setAmount(expense.amount);
    setPaidBy(expense.paidBy);
    setPaymentMethod(expense.paymentMethod);
    setCategory(expense.category);
    setMode(expense.mode);

    console.log(expense.mode);
  }, []);

  const handleSubmit = () => {
    setOpenDetailsDialog(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action={updateExpense}>
        <div className="space-y-4">
          <input type="text" name="id" defaultValue={expense._id} hidden />
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
            defaultValue="Habeeb"
            value={paidBy}
            className="w-full bg-[#14004E15] p-3 rounded-md text-blue-900"
            onChange={(e) => setPaidBy(e.target.value)}
          >
            <option value="Habeeb">Habeeb</option>
            <option value="Javeed">Javeed</option>
            <option value="Zakeer">Zakeer</option>
            <option value="Abba">Abba</option>
            <option value="Anees">Anees</option>
            <option value="Others">Others</option>
          </select>

          <select
            required
            name="paymentMethod"
            defaultValue="PhonePay"
            value={paymentMethod}
            className="w-full bg-[#14004E15] p-3 rounded-md text-blue-900"
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="PhonePay">PhonePay</option>
            <option value="Cash">Cash</option>
          </select>

          <select
            required
            name="category"
            defaultValue="Clothes"
            value={category}
            className="w-full bg-[#14004E15] p-3 rounded-md text-blue-900"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Clothes">Clothes</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Others">Others</option>
          </select>

          <input type="hidden" defaultValue={mode} name="mode" />

          <div className="flex gap-2 px-1 w-full bg-[#14004E15] p-1 rounded-md text-blue-900">
            <div
              className={`w-1/2 flex justify-center ${
                mode == "Payment" ? "bg-green-400 text-white" : " text-blue-800"
              } p-2 rounded-md text-white`}
              onClick={() => setMode("Payment")}
            >
              Payment
            </div>
            <div
              className={`w-1/2 flex justify-center ${
                mode == "Allocation"
                  ? "bg-orange-300 text-white"
                  : "text-blue-800"
              } p-2 rounded-md text-white`}
              onClick={() => setMode("Allocation")}
            >
              Allocation
            </div>
          </div>
        </div>
        <SubmitButton buttonText="Update Expense" />
      </form>
    </div>
  );
}
