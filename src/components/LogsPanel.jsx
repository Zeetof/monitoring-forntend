import React from "react";

export default function LogsPanel() {
  return (
    <div className="panel">
      <div className="panel-title">Live Logs</div>
      <div className="panel-content">
        2024-04-24 13:45:01 Server started<br />
        2024-04-24 13:45:15 Incoming request processed
      </div>
    </div>
  );
}