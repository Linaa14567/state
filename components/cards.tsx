"use client";

import { useAppSelector } from "@/lib/hook";
import type { RootState } from "@/lib/store";

export default function Card() {
  const count = useAppSelector((state: RootState) => state.counter.value);

  return (
    <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-900">Counter</h2>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          Global State
        </span>
      </div>

      <div className="mt-6">
        <p className="text-sm text-slate-600">Current value</p>
        <p className="mt-1 text-4xl font-bold tracking-tight text-slate-900">
          {count}
        </p>
      </div>
    </section>
  );
}