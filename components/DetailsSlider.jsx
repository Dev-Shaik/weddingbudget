import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";

import DetailsSliderForm from "@/components/DetailsSliderForm";
import { deleteExpense } from "@/app/actions";

export default function DetailsSlider({
  openDetailsDialog,
  setOpenDetailsDialog,
  expense,
}) {
  const deleteConfirmation = async (formData) => {
    const confirmation = confirm("Are you sure want to delete?");
    if (confirmation) {
      deleteExpense(formData);
      setOpenDetailsDialog(false);
    }
  };

  return (
    <div>
      <motion.div
        animate={
          openDetailsDialog
            ? { opacity: 0.6, zIndex: 3 }
            : { opacity: 0, display: "none" }
        }
        initial={{ opacity: 0 }}
        className="fixed top-0 left-0 h-full w-screen bg-black -z-10"
      />

      <AnimatePresence initial={false}>
        {openDetailsDialog && (
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
              <div className="mb-2 flex justify-between items-center text-[#000692]">
                <p className="text-xl font-bold ">Expense Details</p>
                <div className="flex items-center gap-3 text-xl ">
                  <form action={deleteConfirmation}>
                    <input type="hidden" name="id" value={expense._id} />
                    <button type="submit">
                      <MdOutlineDelete className="bg-blue-100 rounded-full p-2 text-4xl" />
                    </button>
                  </form>
                  <IoClose
                    onClick={() => setOpenDetailsDialog(false)}
                    className="bg-gray-100 rounded-full p-2 text-4xl"
                  />
                </div>
              </div>
              <DetailsSliderForm
                setOpenDetailsDialog={setOpenDetailsDialog}
                expense={expense}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
