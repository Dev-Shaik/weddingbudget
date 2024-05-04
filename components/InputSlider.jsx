"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

import AddButton from "@/components/AddButton";
import NewExpenseForm from "@/components/NewExpenseForm";

export default function InputSlider() {
  const [openAddDialog, setOpenAddDialog] = useState(false);

  return (
    <div>
      <AddButton setOpenAddDialog={setOpenAddDialog} />

      <motion.div
        animate={
          openAddDialog
            ? { opacity: 0.6, zIndex: 3 }
            : { opacity: 0, display: "none" }
        }
        initial={{ opacity: 0 }}
        className="fixed top-0 left-0 h-full w-screen bg-black -z-10"
      />

      <AnimatePresence initial={false}>
        {openAddDialog && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { y: 0, height: "auto" },
              collapsed: { y: "100%", height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="fixed bottom-0 left-0 z-10 w-full rounded-t-3xl border-2 border-b-0 bg-white shadow-[0px_-8px_20px_-6px_rgba(0,0,0,0.3)]"
          >
            <div className="flex flex-col gap-4 p-4">
              <div className="mb-2 flex justify-between text-[#000692]">
                <p className="text-xl font-bold ">Add Expense</p>
                <IoClose
                  onClick={() => setOpenAddDialog(false)}
                  className="cursor-pointer text-2xl"
                />
              </div>
              <NewExpenseForm setOpenAddDialog={setOpenAddDialog} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
