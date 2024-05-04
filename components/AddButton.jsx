export default function AddButton({ setOpenAddDialog }) {
  return (
    <>
      <div
        className="fixed bottom-10 right-10 ml-8 bg-green-500 w-[70px] h-[70px] flex justify-center items-center rounded-full shadow-md"
        onClick={() => setOpenAddDialog(true)}
      >
        <p className="text-3xl font-semibold text-white p-2">+</p>
      </div>
    </>
  );
}
