"use client";

import React, { useState } from "react";
import { Timetable } from "../components/Timetable";
import { ControlBox } from "../components/ControlBox";
import { firstGradeTimetable, uiText } from "../data/timetable";

export default function Home() {
  const [showClassrooms, setShowClassrooms] = useState<boolean>(true);
  const [showBreaks, setShowBreaks] = useState<boolean>(true);

  return (
    <>
      <Timetable
        title={uiText.timetableTitle}
        schedule={firstGradeTimetable}
        showClassrooms={showClassrooms}
        showBreaks={showBreaks}
      />
      <ControlBox
        showClassrooms={showClassrooms}
        onToggleClassrooms={() => setShowClassrooms((v) => !v)}
        showBreaks={showBreaks}
        onToggleBreaks={() => setShowBreaks((v) => !v)}
      />
    </>
  );
}
