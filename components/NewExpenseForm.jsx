import { createExpense } from "@/app/actions";
import SubmitButton from "@/components/SubmitButton";

export default function NewExpenseForm({ setOpenAddDialog }) {
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
            defaultValue="habeeb"
            className="w-full bg-[#14004E15] p-3 rounded-md text-blue-900 "
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
            className="w-full bg-[#14004E15] p-3 rounded-md text-blue-900 "
          >
            <option value="phonePay">PhonePay</option>
            <option value="cash">Cash</option>
          </select>

          <select
            required
            name="category"
            defaultValue="clothes"
            className="w-full bg-[#14004E15] p-3 rounded-md text-blue-900 "
          >
            <option value="clothes">Clothes</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="others">Others</option>
          </select>
        </div>
        <SubmitButton buttonText="Add Expense" />
      </form>
    </>
  );
}
