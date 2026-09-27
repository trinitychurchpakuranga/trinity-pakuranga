import type { EventInput } from "@fullcalendar/core";

export const calendarEvents: EventInput[] = [
  {
    id: "sunday-service",
    title: "Sunday Service",
    daysOfWeek: [0], // Sunday
    startTime: "10:00:00",
    endTime: "11:30:00",
  },
  {
    id: "bible-study",
    title: "Bible Study",
    daysOfWeek: [5], // Friday
    startTime: "19:30:00",
    endTime: "20:30:00",
  }
];