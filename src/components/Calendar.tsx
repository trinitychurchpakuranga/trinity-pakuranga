import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import { calendarEvents } from "../data/calendarEvents.ts";

const Calendar = () => {
  const calendarRef = useRef<FullCalendar>(null);

  useHotkeys("ArrowLeft", () => {
    calendarRef.current?.getApi().prev();
  });

  useHotkeys("ArrowRight", () => {
    calendarRef.current?.getApi().next();
  });

  useHotkeys("t", () => {
    calendarRef.current?.getApi().today();
  });

  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[listPlugin]}
      initialView="listMonth"
      contentHeight="auto"
      events={calendarEvents}
    />
  );
};

export default Calendar;