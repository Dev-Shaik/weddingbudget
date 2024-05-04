"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ buttonText }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full bg-[#14004E] p-3 mt-8 mb-4 rounded-md text-white"
      aria-disabled={pending}
    >
      {pending ? "Please wait.." : buttonText}
    </button>
  );
}
