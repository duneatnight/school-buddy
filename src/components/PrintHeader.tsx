"use client";

import React from "react";

export function PrintHeader({
  pageName = "School Buddy",
}: {
  pageName?: string;
}) {
  return (
    <div className="hidden print:block w-full border-b border-black/10 p-2 text-center text-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-center">
        <span className="inline-flex items-center gap-2 font-semibold">
          <span aria-hidden title="Pusheen" className="text-base">
            🐱
          </span>
        </span>
      </div>
    </div>
  );
}
