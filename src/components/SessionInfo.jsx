import React from "react";

export const SessionInfo = ({ room, date }) => (
  <div className="session-info">
    <div>Room: {room}</div>
    <div>Time: {new Date(date).toLocaleTimeString().slice(0, -3)}</div>
  </div>
);
