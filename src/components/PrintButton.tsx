"use client";

import React from "react";

export function PrintButton() {
  function handlePrint() {
    if (typeof window !== "undefined") {
      // Trigger any beforeprint listeners (e.g., to refresh timestamp)
      const evt = new Event("beforeprint");
      window.dispatchEvent(evt);
      window.print();
    }
  }

  return (
    <button
      type="button"
      onClick={handlePrint}
      aria-label="Print timetable"
      title="Print timetable"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-black/10 bg-white hover:bg-gray-50 text-sm shadow-sm"
    >
      <span aria-hidden>🖨️</span>
      <span>Print</span>
    </button>
  );
}
