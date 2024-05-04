"use client";

import { useState } from "react";
import DetailsSlider from "@/components/DetailsSlider";
import { IoSearch } from "react-icons/io5";

export default function Transactions({ expenses }) {
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [expense, setExpense] = useState();
  const [nameFilter, setNameFilter] = useState("All");

  const handleClick = (expense) => {
    setOpenDetailsDialog(true);
    setExpense(expense);
  };

  const setFilter = (name) => {
    setNameFilter(name);
  };

  return (
    <div className="px-4 space-y-3">
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold text-gray-600">Transactions</p>
        <IoSearch className="text-xl" />
      </div>

      <div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          <p
            className={
              nameFilter == "All" ? "activeNameFilter" : "inactiveNameFilter"
            }
            onClick={() => setFilter("All")}
          >
            All
          </p>
          <p
            className={
              nameFilter == "Habeeb" ? "activeNameFilter" : "inactiveNameFilter"
            }
            onClick={() => setFilter("Habeeb")}
          >
            Habeeb
          </p>
          <p
            className={
              nameFilter == "Javeed" ? "activeNameFilter" : "inactiveNameFilter"
            }
            onClick={() => setFilter("Javeed")}
          >
            Javeed
          </p>
          <p
            className={
              nameFilter == "Zakeer" ? "activeNameFilter" : "inactiveNameFilter"
            }
            onClick={() => setFilter("Zakeer")}
          >
            Zakeer
          </p>
          <p
            className={
              nameFilter == "Abba" ? "activeNameFilter" : "inactiveNameFilter"
            }
            onClick={() => setFilter("Abba")}
          >
            Abba
          </p>
          <p
            className={
              nameFilter == "Anees" ? "activeNameFilter" : "inactiveNameFilter"
            }
            onClick={() => setFilter("Anees")}
          >
            Anees
          </p>
        </div>
      </div>

      <div>
        {expenses.map((expense) => (
          <div
            key={expense._id}
            onClick={() => handleClick(expense)}
            className="flex justify-between items-center gap-3 w-full py-3 border-b-[1px] border-gray-300"
          >
            <div className="flex justify-center items-center w-[40px] h-[35px] bg-blue-500 rounded-full">
              <p className="text-white">
                {expense.paidBy.slice(0, 1).toUpperCase()}
              </p>
            </div>
            <div className="w-full flex flex-col">
              <div className="flex justify-between">
                <p>{expense.description}</p>
                <p>{Intl.NumberFormat("en-IN").format(expense.amount)}</p>
              </div>
              <div>
                <div className="flex gap-2 text-sm text-gray-500 font-light">
                  <p>{expense.paidBy}</p>
                  <p>{expense.paymentMethod}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <DetailsSlider
        openDetailsDialog={openDetailsDialog}
        setOpenDetailsDialog={setOpenDetailsDialog}
        expense={expense}
      />
    </div>
  );
}
