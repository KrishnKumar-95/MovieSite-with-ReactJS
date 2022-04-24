import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Modal } from "../overlay/Modal";
import classes from "./bookingform.module.css";

const BookingForm = () => {
  const [message, setMessage] = useState(false);

  const location = useLocation();
  const showTime = location.state.time;
  let newtime = parseInt(showTime);
  let pmTime = newtime - 12 + " PM";
  let amTime = newtime + " AM";

  const bookTicket = (event) => {
    event.preventDefault();
    setMessage(true);
  };

  return (
    <Modal>
      <form onSubmit={bookTicket}>
        <h2>{location.state.name}</h2>
        <span>{location.state.day} at</span>{" "}
        <span>{newtime > 12 ? pmTime : amTime}</span>
        <h2 style={{ textAlign: "center", margin: "5px 10px" }}>
          Book Tickets
        </h2>
        <div className={classes.formbox}>
          <div className={classes.elementBox}>
            <label htmlFor="name">Name : </label>
            <input id="name" type="text" />
          </div>
          <div className={classes.elementBox}>
            <label htmlFor="age">Age : </label>
            <input id="age" type="number" min={5} max={105} />
          </div>
          <div className={classes.submitBtn}>
            <input type="submit" value="Book" />
          </div>

          {message && `Your ticket for ` + location.state.name + ` is Booked.`}
        </div>
      </form>
    </Modal>
  );
};

export default BookingForm;
