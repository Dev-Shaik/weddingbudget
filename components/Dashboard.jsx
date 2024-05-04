export default function Dashboard() {
  return (
    <div className="grid grid-cols-2 gap-2 px-4">
      <div className="w-full bg-[#EB00FF20] rounded-sm p-4 ">
        <p className="text-sm text-[#6D0068]">Total Budget</p>
        <p className="text-xl text-[#410042] font-bold">₹ 8,50,000</p>
      </div>
      <div className="w-full bg-[#001AFF20] rounded-sm p-4 ">
        <p className="text-sm text-[#302DC8]">Allocated Fund</p>
        <p className="text-xl text-[#0006A2] font-bold">₹ 4,50,000</p>
      </div>
      <div className="w-full bg-[#33FF0020] rounded-sm p-4 ">
        <p className="text-sm text-[#026D00]">Spent Amount</p>
        <p className="text-xl text-[#014200] font-bold">₹ 4,50,000</p>
      </div>
      <div className="w-full bg-[#FF000020] rounded-sm p-4 ">
        <p className="text-sm text-[#C82D2D]">Remaining Amount</p>
        <p className="text-xl text-[#9A0606] font-bold">₹ 4,00,000</p>
      </div>
    </div>
  );
}
