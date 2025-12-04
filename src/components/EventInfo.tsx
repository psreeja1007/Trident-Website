import { useEffect, useState } from "react";
import { EventCard } from "./EventCard";

export const EventInfo = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/events.json`)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error loading events:", err));
  }, []);

  return (
    <div
      className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                 gap-10 pb-10 px-4"
    >
      {events.map((event: any, index: number) => (
        <EventCard
          key={index}
          title={event.title}
          description={event.description}
          image={event.photo}
          date={event.date}
        />
      ))}
    </div>
  );
};
