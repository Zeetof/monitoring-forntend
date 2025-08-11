import React from "react";

export default function ServiceCard({ name, status, health, cpu, memory, uptime, downtime, controls }) {
  let statusClass = "status ";
  if (status === "Running") statusClass += "healthy";
  else if (status === "Stopped") statusClass += "stopped";
  else statusClass += "unhealthy";
  let healthClass = "status ";
  if (health === "Healthy") healthClass += "healthy";
  else healthClass += "unhealthy";

  // Side bar color
  let barColor = '#22c55e'; // green
  if (status === 'Stopped') barColor = '#f59e42';
  if (status === 'Stopped' && health === 'Unhealthy') barColor = '#ef4444';
  if (status === 'Stopped' && health === 'Stopped') barColor = '#f59e42';
  if (status === 'Running' && health === 'Unhealthy') barColor = '#ef4444';
  if (status === 'Stopped' && health === 'Healthy') barColor = '#f59e42';
  if (status === 'Running' && health === 'Stopped') barColor = '#f59e42';

  return (
    <div className="service-card" style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
      <div style={{ width: 8, borderRadius: 8, background: barColor, marginRight: 16, minHeight: '100%' }}></div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div className="service-title">{name}</div>
        <div className="status-row">
          <span className={statusClass}>{status}</span>
          {health && <span className={healthClass}>{health}</span>}
        </div>
        <div className="progress-label">CPU <span>{cpu} %</span></div>
        <div className="progress-bar"><div className="progress" style={{ width: `${cpu}%` }}></div></div>
        <div className="progress-label">Memory <span>{memory} %</span></div>
        <div className="progress-bar"><div className="progress" style={{ width: `${memory}%` }}></div></div>
        <div className="progress-label">
          <span>Uptime <span style={{color:'#22c55e', fontWeight:'bold'}}>{uptime}%</span></span>
          <span>Downtime <span style={{color:'#ef4444', fontWeight:'bold'}}>{downtime}%</span></span>
        </div>
        <div className="controls">
          {controls.map(ctrl => (
            <button key={ctrl}>{ctrl}</button>
          ))}
        </div>
      </div>
    </div>
  );
}