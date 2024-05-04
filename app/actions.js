"use server";

import connectToMongoDB from "@/db/mongodb";
import Expense from "@/models/expenseModel";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createExpense = async (formData) => {
  const description = formData.get("description");
  const amount = formData.get("amount");
  const paidBy = formData.get("paidBy");
  const paymentMethod = formData.get("paymentMethod");
  const category = formData.get("category");
  const mode = formData.get("mode");

  const newExpense = {
    description: description,
    amount: amount,
    paidBy: paidBy,
    paymentMethod: paymentMethod,
    category: category,
    mode: mode,
  };

  try {
    await connectToMongoDB();
    const response = await Expense.create(newExpense);
    if (response) {
      console.log("Expense added successfully!", mode);
    }
  } catch (error) {
    console.log("Failed to add expense details!");
  }

  revalidatePath("/");
  redirect("/");
};

export const updateExpense = async (formData) => {
  const id = formData.get("id");
  const description = formData.get("description");
  const amount = formData.get("amount");
  const paidBy = formData.get("paidBy");
  const paymentMethod = formData.get("paymentMethod");
  const category = formData.get("category");
  const mode = formData.get("mode");

  const newExpense = {
    description: description,
    amount: amount,
    paidBy: paidBy,
    paymentMethod: paymentMethod,
    category: category,
    mode: mode,
  };

  try {
    await connectToMongoDB();
    const response = await Expense.findByIdAndUpdate(id, newExpense);
    if (response) {
      console.log("Expense details updated successfully!");
    }
  } catch (error) {
    console.log("Failed to update expense details!");
  }

  revalidatePath("/");
  redirect("/");
};

export const deleteExpense = async (formData) => {
  const id = formData.get("id");

  try {
    await connectToMongoDB();
    const response = await Expense.findByIdAndDelete(id);
    if (response) {
      console.log("Expense deleted successfully!");
    }
  } catch (error) {
    console.log("Failed to delete expense details!");
  }

  revalidatePath("/");
  redirect("/");
};
