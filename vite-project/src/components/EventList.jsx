import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./EventList.css";

const EventList = () => {
  const [events, setEvents] = useState([]);

  console.log("EventList component rendered");

  useEffect(() => {
    // Mock data for testing
    setEvents([
      { _id: "1", name: "Event 1", date: new Date() },
      { _id: "2", name: "Event 2", date: new Date() },
    ]);
  }, []);

  return (
    <div className="eventListContainer">
      <h1>Events</h1>
      <ul className="eventList">
        {events.map((event) => (
          <li key={event._id} className="eventListItem">
            <Link to={`/events/${event._id}`} className="eventLink">
              {event.name} - {new Date(event.date).toLocaleDateString()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
