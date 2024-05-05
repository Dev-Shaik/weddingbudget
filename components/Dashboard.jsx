"use client";

import { useEffect, useState } from "react";

export default function Dashboard({ expenses }) {
  const [allocated, setAllocated] = useState(0);
  const [paid, setPaid] = useState(0);
  const [due, setDue] = useState(0);

  useEffect(() => {
    setAllocated(
      expenses.reduce((sum, expense) => sum + parseInt(expense.amount), 0)
    );
    let paidExpenses = expenses.filter((expense) => {
      return expense.mode == "Payment";
    });
    setPaid(
      paidExpenses.reduce((sum, expense) => sum + parseInt(expense.amount), 0)
    );
    setDue(allocated - paid);
  });
  return (
    <div className="grid grid-cols-2 gap-2 px-4">
      <div className="w-full bg-[#EB00FF20] rounded-sm p-4 ">
        <p className="text-sm text-[#6D0068]">Total Budget</p>
        <p className="text-xl text-[#410042] font-bold">₹ 8,50,000</p>
      </div>
      <div className="w-full bg-[#001AFF20] rounded-sm p-4 ">
        <p className="text-sm text-[#302DC8]">Allocated Fund</p>
        <p className="text-xl text-[#0006A2] font-bold">
          ₹ {Intl.NumberFormat("en-IN").format(allocated)}
        </p>
      </div>
      <div className="w-full bg-[#33FF0020] rounded-sm p-4 ">
        <p className="text-sm text-[#026D00]">Payments Done</p>
        <p className="text-xl text-[#014200] font-bold">
          ₹ {Intl.NumberFormat("en-IN").format(paid)}
        </p>
      </div>
      <div className="w-full bg-[#FF000020] rounded-sm p-4 ">
        <p className="text-sm text-[#C82D2D]">Payments Due</p>
        <p className="text-xl text-[#9A0606] font-bold">
          ₹ {Intl.NumberFormat("en-IN").format(due)}
        </p>
      </div>
    </div>
  );
}
