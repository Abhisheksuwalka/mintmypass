import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    axios
      .get(`/api/events/${id}`)
      .then((res) => setEvent(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="eventDetailsContainer">
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <p>{new Date(event.date).toLocaleDateString()}</p>
      <p>{event.time}</p>
      <p>{event.duration}</p>
      <p>{event.audience}</p>
    </div>
  );
};

export default EventDetails;
