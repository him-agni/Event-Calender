import React, { useState, useEffect } from "react";
import "./Calender.css";
import { format } from "date-fns";

const Calender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [startDay, setStartDay] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [event, setEvent] = useState({});
  const [eventInput, setEventInput] = useState("");

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, 1);
    const days = [];

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    setDaysInMonth(days);
    setStartDay(new Date(year, month, 1).getDay());
  }, [currentDate]);

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    const dateKey = selectedDate.toDateString();
    eventInput !== "" && setEvent({ ...event, [dateKey]: eventInput });
    setEventInput("");
    setSelectedDate(null);
  };

  return (
    <>
      <div className="calender">
        <div className="header">
          <button onClick={prevMonth}>{"<"}</button>
          <span>{format(currentDate, "MMMM yyyy")}</span>
          <button onClick={nextMonth}>{">"}</button>
        </div>
        <div className="day-names">
          {weekDays.map((day) => (
            <div key={day} className="day-name">
              {day}
            </div>
          ))}
        </div>
        <div className="days">
          {Array.from({ length: startDay }).map((_, index) => (
            <div key={index} className="empty-day"></div>
          ))}
          {daysInMonth.map((day) => (
            <div
              key={day}
              className={`day ${
                day.getDate() === new Date().getDate() &&
                day.getMonth() === new Date().getMonth()
                  ? "today"
                  : ""
              } ${
                selectedDate &&
                day.toDateString() === selectedDate.toDateString()
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleDateClick(day)}
            >
              {day.getDate()}
              {event[day.toDateString()] && (
                <div className="event-text">{event[day.toDateString()]}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      {selectedDate && (
        <div className="event-form">
          <form onSubmit={handleEventSubmit}>
            <label>
              Event:
              <input
                type="text"
                placeholder="Add event"
                value={eventInput}
                onChange={(e) => setEventInput(e.target.value)}
              />
            </label>
            <input type="submit" value="Add event" />
          </form>
        </div>
      )}
    </>
  );
};

export default Calender;
