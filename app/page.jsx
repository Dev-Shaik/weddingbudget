import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import Transactions from "@/components/Transactions";
import InputSlider from "@/components/InputSlider";

import connectToMongoDB from "@/db/mongodb";
import Expense from "@/models/expenseModel";

export default async function Home() {
  await connectToMongoDB();
  const expenses = await Expense.find();
  return (
    <main className="flex flex-col gap-5 max-w-[400px] m-auto py-8 bg-gray-100 min-h-svh">
      <Header />
      <Dashboard />
      <Transactions expenses={JSON.parse(JSON.stringify(expenses))} />
      <InputSlider />
    </main>
  );
}
