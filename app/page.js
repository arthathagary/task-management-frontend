"use client";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import EventItem from "../components/EventItem.jsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog.jsx";

const MyCalendar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const event = [
    {
      start: "2024-03-06",
      end: "2024-03-07",
      title: "Hello",
      id: "12112129",
    },
    {
      start: "2024-03-06",
      end: "2024-03-07",
      title: "Hello",
      id: "12112129",
    },
  ];

  const [events, setEvents] = useState(event);

  const handleEventDrop = (info) => {
    // Deletion logic:
    const eventId = info.id;
    setEvents(events.filter((event) => event.id !== eventId));
  };

  const handleSelect = (info) => {
    // setIsOpen(true);
    const { start, end } = info;
    const eventNamePrompt = prompt("Enter, event name");
    const startDate = prompt("Enter, start");
    const endDate = prompt("Enter, end");
    console.log(info.view.calendar);
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          start: startDate,
          end: endDate,
          title: eventNamePrompt,
          id: uuid(),
        },
      ]);
      // setIsOpen(false);
    }

    //post api
  };

  const [isEditing, setIsEditing] = useState(false);
  const [eventToEdit, setEventToEdit] = useState(null);

  const handleEdit = (event) => {
    setEventToEdit(event);
    setIsEditing(true);
  };

  useEffect(() => {
    console.log(events);
    // This will log the updated events after each change
  }, [events]);

  return (
    <>
      <div className="px-8 py-8">
        <FullCalendar
          editable
          selectable
          events={events}
          select={handleSelect}
          headerToolbar={{
            start: "today prev next",
            center: "title",
            end: "dayGridMonth dayGridWeek dayGridDay",
          }}
          plugins={[daygridPlugin, interactionPlugin]}
          views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
          // eventSources={event}
          eventContent={(info) => (
            <EventItem
              info={info}
              onDelete={handleEventDrop}
              onEdit={handleEdit}
            />
          )}
          eventDrop={handleEventDrop}
          titleFormat={{ month: "long", year: "numeric" }}
        />
      </div>

      <Dialog open={isOpen}>
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MyCalendar;
