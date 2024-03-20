"use client";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation.js";
import EventItem from "../../components/EventItem.jsx";

import CreateModal from "../../components/CreateModal.jsx";
import axios from "axios";

const MyCalendar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState();
  const [resEv, setResEv] = useState([]);

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
      title: "Hello2",
      id: "121121292",
    },
  ];

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/v1/events");
        console.log(res.data.data);
        const formattedEvents = res.data.data.map((event) => ({
          start: event.startDate,
          end: event.endDate,
          title: event.title,
          id: event.id,
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
        // Consider displaying an error message to the user
      }
    };

    // Now we call fetchData within useEffect
    fetchData();
  }, []);

  const handleEventDrop = (info) => {
    // Deletion logic:
    const eventId = info.id;
    setEvents(events.filter((event) => event.id !== eventId));
    axios.delete(`http://localhost:8080/api/v1/event/${info.id}`);
    router.refresh();
  };

  const handleSelect = (info) => {
    setIsOpen(true);
    setInfo(info);
    const { start, end } = info;
    // const eventNamePrompt = prompt("Enter, event name");
    // const startDate = prompt("Enter, start");
    // const endDate = prompt("Enter, end");
    // console.log(info.view.calendar);
    // if (eventNamePrompt) {
    //   setEvents([
    //     ...events,
    //     {
    //       start: start,
    //       end: end,
    //       title: eventNamePrompt,
    //       id: uuid(),
    //     },
    //   ]);
    // setIsOpen(false);
    // }

    //post api
  };

  const [isEditing, setIsEditing] = useState(false);
  const [eventToEdit, setEventToEdit] = useState(null);

  const handleEdit = (info) => {
    const eventId = info.id;
    console.log(event, "edit ev");
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

      <CreateModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setEvents={setEvents}
        events={events}
        info={info}
      />
    </>
  );
};

export default MyCalendar;
