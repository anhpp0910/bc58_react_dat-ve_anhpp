import React from "react";
import Header from "./Header";
import Screen from "./Screen";
import TicketList from "./TicketList";
import "./assets/index.css";

export default function Ex_Booking() {
  return (
    <div>
      <Header />
      <div className="row w-100">
        <Screen />
        <TicketList />
      </div>
    </div>
  );
}
