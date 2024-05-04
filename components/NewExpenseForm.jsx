"use client";

import { createExpense } from "@/app/actions";
import SubmitButton from "@/components/SubmitButton";
import { useState } from "react";

export default function NewExpenseForm({ setOpenAddDialog }) {
  const [mode, setMode] = useState("Payment");
  const handleSubmit = () => {
    setOpenAddDialog(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit} action={createExpense}>
        <div className="space-y-4">
          <input
            required
            name="description"
            type="text"
            placeholder="Description"
            className="w-full bg-[#14004E15] p-3 rounded-md text-blue-900 "
          />
          <input
            required
            name="amount"
            type="Number"
            placeholder="Amount"
            className="w-full bg-[#14004E15] p-3 rounded-md text-blue-900 "
          />
          <select
            required
            name="paidBy"
            defaultValue="Habeeb"
            className="w-full bg-[#14004E15] p-3 rounded-md text-blue-900 "
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
            className="w-full bg-[#14004E15] p-3 rounded-md text-blue-900 "
          >
            <option value="PhonePay">PhonePay</option>
            <option value="Cash">Cash</option>
          </select>

          <select
            required
            name="category"
            defaultValue="Clothes"
            className="w-full bg-[#14004E15] p-3 rounded-md text-blue-900 "
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
        <SubmitButton buttonText="Add Expense" />
      </form>
    </>
  );
}
