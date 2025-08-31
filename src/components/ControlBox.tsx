"use client";

import React from "react";
import { PrintButton } from "./PrintButton";

export function ControlBox({
  showClassrooms,
  onToggleClassrooms,
  showBreaks,
  onToggleBreaks,
  parentsMode,
  onToggleParentsMode,
}: {
  showClassrooms: boolean;
  onToggleClassrooms: () => void;
  showBreaks: boolean;
  onToggleBreaks: () => void;
  parentsMode: boolean;
  onToggleParentsMode: () => void;
}) {
  return (
    <div className="fixed inset-x-0 bottom-4 flex justify-center pointer-events-none print:hidden">
      <div className="pointer-events-auto inline-flex items-center gap-3 px-4 py-2 rounded-full border border-black/10 bg-white shadow-md">
        <button
          type="button"
          onClick={onToggleClassrooms}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-black/10 bg-white hover:bg-gray-50 text-sm"
          aria-pressed={showClassrooms}
        >
          <span aria-hidden>🏫</span>
          <span>{showClassrooms ? "Hide classrooms" : "Show classrooms"}</span>
        </button>
        <button
          type="button"
          onClick={onToggleBreaks}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-black/10 bg-white hover:bg-gray-50 text-sm"
          aria-pressed={showBreaks}
        >
          <span aria-hidden>🍎</span>
          <span>{showBreaks ? "Hide breaks" : "Show breaks"}</span>
        </button>
        <button
          type="button"
          onClick={onToggleParentsMode}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-black/10 bg-white hover:bg-gray-50 text-sm"
          aria-pressed={parentsMode}
        >
          <span aria-hidden>👪</span>
          <span>{parentsMode ? "Parents view: ON" : "Parents view: OFF"}</span>
        </button>
        <PrintButton />
      </div>
    </div>
  );
}
