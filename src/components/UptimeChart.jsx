import React from "react";

export default function UptimeChart() {
  // Example: 98% uptime
  const uptime = 98;
  return (
    <div className="panel">
      <div className="panel-title">Historical Uptime</div>
      <div style={{ fontSize: '2.2rem', fontWeight: 'bold', color: uptime > 95 ? '#22c55e' : '#ef4444', marginBottom: 8 }}>{uptime}%</div>
      <div style={{ background: '#1e293b', borderRadius: 6, height: 12, marginBottom: 8 }}>
        <div style={{ width: `${uptime}%`, height: '100%', background: '#22c55e', borderRadius: 6 }}></div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', color: '#9ca3af' }}>
        <span>Last 7 days</span>
        <span>1 outage</span>
        <span>Max: 100%</span>
      </div>
    </div>
  );
}