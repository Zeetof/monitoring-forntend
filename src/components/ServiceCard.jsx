import React from "react";
import './ServiceCard.css';

export default function ServiceCard({ name, environment, healthEndpoint, status, uptime, controls, metrics }) {
  
  // Function to determine if the service name should be white
  const shouldUseWhiteColor = (serviceName) => {
    const whiteColorServices = ['database name', 'pm-server', 'cache', 'worker', 'account core service', 'dashboard'];
    return whiteColorServices.includes(serviceName.toLowerCase());
  };

  // Determine status color class
  let statusColorClass = 'default';
  if (status === "Running") statusColorClass = 'running';
  else if (status === "Stopped") statusColorClass = 'stopped';

  // Determine title class
  const titleClass = `service-card-title ${shouldUseWhiteColor(name) ? name.toLowerCase().replace(/\s+/g, '-') : ''}`;

  return (
    <div className="service-card" data-service-name={name.toLowerCase().replace(/\s+/g, '-') }>
      <div className="service-card-header">
        <div className="service-card-title-container">
          <div className={`service-card-status-indicator ${statusColorClass}`}></div>
          <h3 className={titleClass}>
            {name}
          </h3>
        </div>
        {environment && (
          <span className="service-card-environment">
            {environment}
          </span>
        )}
      </div>

      <div className="service-card-url">
        <p>
          {healthEndpoint || "https://api.systemspecsg.com/services/" + name.toLowerCase().replace(/\s+/g, '-') + "/management/health"}
        </p>
      </div>

      <div className="service-card-stats">
        <div className="service-card-uptime-container">
          <span className="service-card-uptime-value">
            {uptime}% Uptime
          </span>
          <span className="service-card-uptime-label">
            API
          </span>
        </div>
        <div className="service-card-progress-bar-container">
          <div className="service-card-progress-bar" style={{ width: `${uptime}%` }}></div>
        </div>

        <div className="service-card-stats-grid">
          <div className="service-card-stat-item up">
            <div className="service-card-stat-value up">
              {metrics?.up || 0}
            </div>
            <div className="service-card-stat-label">
              Up
            </div>
          </div>
          <div className="service-card-stat-item down">
            <div className="service-card-stat-value down">
              {metrics?.down || 0}
            </div>
            <div className="service-card-stat-label">
              Down
            </div>
          </div>
          {/* <div className="service-card-stat-item">
            <div className="service-card-stat-value errors">
              {metrics?.errors || 0}
            </div>
            <div className="service-card-stat-label">
              Errors
            </div>
          </div> */}
          <div className="service-card-stat-item total">
            <div className="service-card-stat-value total">
              {metrics?.total || 0}
            </div>
            <div className="service-card-stat-label">
              Total
            </div>
          </div>
          <div className="service-card-stat-item avg-time">
            <div className="service-card-stat-value avg-time">
              {metrics?.averageTimeMs || 'N/A'}
            </div>
            <div className="service-card-stat-label">
              Avg Time
            </div>
          </div>
        </div>
      </div>
      
      {controls && controls.length > 0 && (
        <div className="service-card-controls">
          {controls.map((ctrl) => (
            <button
              key={ctrl}
              className="service-card-control-button"
            >
              {ctrl}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}