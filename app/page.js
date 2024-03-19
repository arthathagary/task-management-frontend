"use client";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import EventItem from "@/components/EventItem";

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const event = [
    {
      title: "hello",
    },
  ];

  const handleEventDrop = (info) => {
    // ... (rest of your existing code)

    if (!confirm("Are you sure you want to delete this event?")) {
      return; // Stop execution if the user selects 'cancel'
    }
    // Deletion logic:
    const eventId = info.id;
    setEvents(events.filter((event) => event.id !== eventId));
  };

  const handleSelect = (info) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Enter, event name");
    console.log(info.view.calendar);
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          start,
          end,
          title: eventNamePrompt,
          id: uuid(),
        },
      ]);
    }

    //post api
  };

  useEffect(() => {
    console.log(events);
    // This will log the updated events after each change
  }, [events]);

  return (
    <div className="px-8 py-8">
      <FullCalendar
        editable
        selectable
        events={events}
        select={handleSelect}
        headerToolbar={{
          start: "today prev next",
          end: "dayGridMonth dayGridWeek dayGridDay",
        }}
        plugins={[daygridPlugin, interactionPlugin]}
        views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
        // eventSources={d}
        eventContent={(info) => (
          <EventItem info={info} onDelete={handleEventDrop} />
        )}
        eventDrop={handleEventDrop}
      />
    </div>
  );
};

export default MyCalendar;
