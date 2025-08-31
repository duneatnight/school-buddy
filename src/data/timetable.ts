export type Lesson = {
  start: string;
  end: string;
  subject: string;
  classroom: string;
  icon?: string;
  colorClass?: string;
  teacher?: string;
  group?: string;
  comment?: string;
};

export type DaySchedule = {
  day:
    | "Pirmadienis"
    | "Antradienis"
    | "Trečiadienis"
    | "Ketvirtadienis"
    | "Penktadienis";
  lessons: Lesson[];
};

export const uiText = {
  timetableTitle: "",
};

export const firstGradeTimetable: DaySchedule[] = [
  {
    day: "Pirmadienis",
    lessons: [
      {
        start: "08:00",
        end: "08:35",
        subject: "Konsultacija",
        classroom: "D116",
        icon: "🗣️",
        colorClass: "bg-gray-100 text-gray-800",
        teacher: "Danutė Kazlauskienė",
        comment: "UPT konsultacija",
      },
      {
        start: "08:45",
        end: "09:20",
        subject: "Lietuvių",
        classroom: "D116",
        icon: "📖",
        colorClass: "bg-blue-100 text-blue-800",
        teacher: "Danutė Kazlauskienė",
      },
      {
        start: "09:30",
        end: "10:05",
        subject: "Matematika",
        classroom: "D116",
        icon: "➗",
        colorClass: "bg-emerald-100 text-emerald-800",
        teacher: "Danutė Kazlauskienė",
      },
      {
        start: "10:30",
        end: "11:05",
        subject: "Etn. kultūra",
        classroom: "D116",
        icon: "🌿",
        colorClass: "bg-lime-100 text-lime-800",
        teacher: "Rima Visackienė",
      },
      {
        start: "11:15",
        end: "12:00",
        subject: "Teatras ir baletas",
        classroom: "D116",
        icon: "🎭",
        colorClass: "bg-fuchsia-100 text-fuchsia-800",
        teacher: "Jelena Malikėnienė",
        group: "BAL(mer), BAL(ber)",
      },
      {
        start: "12:15",
        end: "13:00",
        subject: "Gimnastika",
        classroom: "BE R11 salė (B8)",
        icon: "🤸",
        colorClass: "bg-orange-100 text-orange-800",
        teacher: "Svetlana Jasevičienė",
        group: "BAL(mer), BAL(ber)",
      },
    ],
  },
  {
    day: "Antradienis",
    lessons: [
      {
        start: "08:00",
        end: "08:45",
        subject: "Baletas",
        classroom: "B5",
        icon: "🩰",
        colorClass: "bg-pink-100 text-pink-800",
        teacher: "Žavinta Čičelytė, Yanna Liebiedieva",
        group: "BAL(mer)",
      },
      {
        start: "09:00",
        end: "10:15",
        subject: "Lietuvių",
        classroom: "D116",
        icon: "📖",
        colorClass: "bg-blue-100 text-blue-800",
        teacher: "Danutė Kazlauskienė",
      },
      {
        start: "10:40",
        end: "11:15",
        subject: "Matematika",
        classroom: "D116",
        icon: "➗",
        colorClass: "bg-emerald-100 text-emerald-800",
        teacher: "Danutė Kazlauskienė",
      },
      {
        start: "11:25",
        end: "12:00",
        subject: "Muzika",
        classroom: "D116",
        icon: "🎵",
        colorClass: "bg-yellow-100 text-yellow-800",
        teacher: "Julija Vėželytė-Vilkevičienė",
        group: "BAL(mer), BAL(ber)",
      },
      {
        start: "12:10",
        end: "12:45",
        subject: "Muz. teorija",
        classroom: "D116",
        icon: "🎼",
        colorClass: "bg-indigo-100 text-indigo-800",
        teacher: "Loreta Zinkevičienė",
        comment: "Muzikos teorijos įvadas (mod)",
        group: "BAL(mer), BAL(ber)",
      },
    ],
  },
  {
    day: "Trečiadienis",
    lessons: [
      {
        start: "08:00",
        end: "08:45",
        subject: "Baletas",
        classroom: "B5",
        icon: "🩰",
        colorClass: "bg-pink-100 text-pink-800",
        teacher: "Žavinta Čičelytė, Yanna Liebiedieva",
        group: "BAL(mer)",
      },
      {
        start: "09:00",
        end: "10:15",
        subject: "Lietuvių",
        classroom: "D116",
        icon: "📖",
        colorClass: "bg-blue-100 text-blue-800",
        teacher: "Danutė Kazlauskienė",
      },
      {
        start: "10:40",
        end: "11:15",
        subject: "Tikyba",
        classroom: "BE A2 auditorija 2",
        icon: "🙏",
        colorClass: "bg-purple-100 text-purple-800",
        teacher: "Simona Bačiulienė",
        group: "TIK",
      },
      {
        start: "11:25",
        end: "12:00",
        subject: "Matematika",
        classroom: "D116",
        icon: "➗",
        colorClass: "bg-emerald-100 text-emerald-800",
        teacher: "Danutė Kazlauskienė",
      },
      {
        start: "12:10",
        end: "12:45",
        subject: "Muzik. raiška",
        classroom: "211 studija",
        icon: "🎶",
        colorClass: "bg-rose-100 text-rose-800",
        teacher: "Julija Vėželytė-Vilkevičienė",
        group: "BAL(mer), BAL(ber)",
      },
    ],
  },
  {
    day: "Ketvirtadienis",
    lessons: [
      {
        start: "08:45",
        end: "09:20",
        subject: "Matematika",
        classroom: "D116",
        icon: "➗",
        colorClass: "bg-emerald-100 text-emerald-800",
        teacher: "Danutė Kazlauskienė",
      },
      {
        start: "09:30",
        end: "10:05",
        subject: "Technologijos",
        classroom: "D116",
        icon: "🛠️",
        colorClass: "bg-gray-100 text-gray-800",
        teacher: "Danutė Kazlauskienė",
      },
      {
        start: "10:30",
        end: "11:05",
        subject: "Dailė",
        classroom: "D116",
        icon: "🎨",
        colorClass: "bg-pink-100 text-pink-800",
        teacher: "Danutė Kazlauskienė",
      },
      {
        start: "11:15",
        end: "11:50",
        subject: "Visuomeninis ugd.",
        classroom: "D116",
        icon: "🌍",
        colorClass: "bg-cyan-100 text-cyan-800",
        teacher: "Danutė Kazlauskienė",
      },
      {
        start: "12:15",
        end: "13:00",
        subject: "Konsultacija",
        classroom: "D116",
        icon: "🗣️",
        colorClass: "bg-gray-100 text-gray-800",
        teacher: "Danutė Kazlauskienė",
        comment: "UPT konsultacija",
      },
      {
        start: "13:15",
        end: "14:00",
        subject: "Gimnastika",
        classroom: "BE R11 salė (B8)",
        icon: "🤸",
        colorClass: "bg-orange-100 text-orange-800",
        teacher: "Svetlana Jasevičienė",
        group: "BAL(mer), BAL(ber)",
      },
    ],
  },
  {
    day: "Penktadienis",
    lessons: [
      {
        start: "08:00",
        end: "08:45",
        subject: "Baletas",
        classroom: "B5",
        icon: "🩰",
        colorClass: "bg-pink-100 text-pink-800",
        teacher: "Žavinta Čičelytė, Yanna Liebiedieva",
      },
      {
        start: "09:00",
        end: "10:15",
        subject: "Lietuvių",
        classroom: "D116",
        icon: "📖",
        colorClass: "bg-blue-100 text-blue-800",
        teacher: "Danutė Kazlauskienė",
      },
      {
        start: "10:40",
        end: "11:15",
        subject: "Gamta",
        classroom: "D116",
        icon: "🔬",
        colorClass: "bg-lime-100 text-lime-800",
        teacher: "Danutė Kazlauskienė",
      },
      {
        start: "11:25",
        end: "12:10",
        subject: "Vaidmens kūrimas",
        classroom: "B7",
        icon: "🎭",
        colorClass: "bg-fuchsia-100 text-fuchsia-800",
        teacher: "Giedrė Zaščižinskaitė-Keblienė, Agnė Jurkūnienė",
        comment: "Susipažinimas. Mokymo plano aptarimas.",
        group: "BAL(mer), BAL(ber)",
      },
      {
        start: "12:10",
        end: "12:45",
        subject: "Pianinas",
        classroom: "109 auditorija",
        icon: "🎹",
        colorClass: "bg-amber-100 text-amber-800",
        teacher: "Agnė Jurkūnienė",
        comment: "Šokio akompanavimas",
        group: "Seminaras 83",
      },
    ],
  },
];
