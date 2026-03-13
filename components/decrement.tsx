
"use client";

import { decrement } from "@/lib/features/counterSlice/counterSlice";
import { useAppDispatch } from "@/lib/hook";

export default function Decrement() {
  const dispatch = useAppDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(decrement())}
      className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-slate-400"
    >
      Decrement
    </button>
  );
}
