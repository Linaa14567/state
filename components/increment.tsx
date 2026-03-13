"use client";

import { increment } from "@/lib/features/counterSlice/counterSlice";
import { useAppDispatch } from "@/lib/hook";

export default function Increment() {
  const dispatch = useAppDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(increment())}
      className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-500 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      Increase
    </button>
  );
}