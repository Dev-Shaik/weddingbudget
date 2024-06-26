"use client";

import { useState } from "react";
import DetailsSlider from "@/components/DetailsSlider";
import { IoSearch } from "react-icons/io5";

export default function Transactions({ expenses }) {
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [expense, setExpense] = useState();
  const [nameFilter, setNameFilter] = useState("All");
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const handleClick = (expense) => {
    setOpenDetailsDialog(true);
    setExpense(expense);
  };

  const dateFormatter = (date) => {
    let d = new Date(date);
    let r = d.toDateString().slice(0, 10);
    return r;
  };

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const setFilter = (name) => {
    if (name != "All") {
      setFilteredExpenses(
        expenses.filter((expense) => {
          return expense.paidBy == name;
        })
      );
    } else {
      setFilteredExpenses(expenses);
    }

    filteredExpenses.reverse();
    setNameFilter(name);
  };

  return (
    <div className="px-4 space-y-3">
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold text-gray-600">
          Transactions{" "}
          <span className="bg-gray-300 font-semibold text-sm text-gray-700 px-[6px] py-[2px] rounded-full">
            {filteredExpenses.length}
          </span>
        </p>
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

          <p
            className={
              nameFilter == "Others" ? "activeNameFilter" : "inactiveNameFilter"
            }
            onClick={() => setFilter("Others")}
          >
            Others
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse">
        {filteredExpenses.length > 0 ? (
          filteredExpenses?.map((expense) => (
            <div
              key={expense._id}
              onClick={() => handleClick(expense)}
              className="flex justify-between items-center gap-3 w-full py-3 border-b-[1px] border-gray-300"
            >
              <div
                className={`flex justify-center items-center w-[40px] h-[35px] rounded-full ${
                  expense.paidBy == "Habeeb"
                    ? "bg-[#0CA8ED]"
                    : expense.paidBy == "Javeed"
                    ? "bg-[#B0D16F]"
                    : expense.paidBy == "Zakeer"
                    ? "bg-[#45C5FF]"
                    : expense.paidBy == "Abba"
                    ? "bg-[#FFB54C]"
                    : expense.paidBy == "Anees"
                    ? "bg-[#F71E78]"
                    : "bg-[#FFE278]"
                }`}
              >
                <p className="text-white">
                  {expense.paidBy.slice(0, 1).toUpperCase()}
                </p>
              </div>
              <div className="w-full flex flex-col">
                {/* First row */}
                <div className="flex justify-between">
                  <p>{truncateString(expense.description, 18)}</p>
                  <p>{Intl.NumberFormat("en-IN").format(expense.amount)}</p>
                </div>
                {/* Second row */}
                <div className="flex justify-between">
                  <div className="flex gap-2 text-sm text-gray-500 font-light items-center">
                    {/* <p>{expense.createdAt?.slice(0, 10)}</p> */}
                    <p>{dateFormatter(expense.createdAt)}</p>
                    <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                    <p>{expense.paymentMethod}</p>
                  </div>
                  <div>
                    <p
                      className={`text-sm ${
                        expense.mode == "Payment"
                          ? "text-green-800"
                          : "text-orange-800"
                      } font-light`}
                    >
                      {expense.mode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-32 flex flex-col justify-center items-center">
            <p className="text-gray-800 font-bold">No expenses found</p>
            <p className="text-sm font-light text-gray-400 text-center px-8 py-2">
              Add expenses by clicking on + button on the bottom
            </p>
          </div>
        )}
      </div>

      <DetailsSlider
        openDetailsDialog={openDetailsDialog}
        setOpenDetailsDialog={setOpenDetailsDialog}
        expense={expense}
      />
    </div>
  );
}
