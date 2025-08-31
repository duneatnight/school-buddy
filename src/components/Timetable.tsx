import React from "react";
import type { DaySchedule } from "../data/timetable";

type TimetableProps = {
  title?: string;
  schedule: DaySchedule[];
  showClassrooms?: boolean;
  showBreaks?: boolean;
};

export function Timetable({
  title = "1st Grade Timetable",
  schedule,
  showClassrooms = true,
  showBreaks = true,
}: TimetableProps) {
  return (
    <section className="max-w-5xl mx-auto p-4 sm:p-6">
      {title && (
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {schedule.map((day) => (
          <article
            key={day.day}
            className="rounded-xl border border-black/10 bg-white/80 backdrop-blur p-4 shadow-sm"
            aria-label={`${day.day} schedule`}
          >
            <header className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold">{day.day}</h3>
            </header>
            <ul className="space-y-2">
              {day.lessons.map((lesson, idx) => {
                const next = day.lessons[idx + 1];
                return (
                  <React.Fragment key={`${day.day}-${idx}`}>
                    <li className="flex items-center gap-3">
                      <div className="w-16 shrink-0 text-sm font-medium text-black/70 tabular-nums">
                        {lesson.start}
                        <span className="text-black/40">–</span>
                        {lesson.end}
                      </div>
                      <div className="flex items-center gap-2 flex-nowrap overflow-hidden w-full min-w-0">
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm whitespace-nowrap overflow-hidden flex-1 min-w-0 max-w-full ${
                            lesson.colorClass ?? "bg-gray-100 text-gray-800"
                          }`}
                        >
                          <span aria-hidden>{lesson.icon ?? "📘"}</span>
                          <span className="font-medium truncate">
                            {lesson.subject}
                          </span>
                        </div>
                        {showClassrooms && (
                          <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800 flex-none whitespace-nowrap">
                            <span aria-hidden>📍</span>
                            <span className="font-medium">
                              {lesson.classroom}
                            </span>
                          </div>
                        )}
                      </div>
                    </li>
                    {showBreaks && next && (
                      <li className="flex items-center gap-3">
                        <div className="w-16 shrink-0 text-sm font-medium text-black/70 tabular-nums">
                          {lesson.end}
                          <span className="text-black/40">–</span>
                          {next.start}
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm bg-gray-50 text-gray-700 border border-black/5">
                          <span aria-hidden>🍎</span>
                          <span className="font-medium truncate">
                            Pertrauka
                          </span>
                        </div>
                      </li>
                    )}
                  </React.Fragment>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
