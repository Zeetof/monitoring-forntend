import React from 'react';
import './ServiceStatusCard.css';

const ServiceStatusCard = () => {
  return (
    <div className="service-status-card">
      <div className="service-status-card-header">
        <div className="service-status-card-title-container">
          <div className="service-status-card-status-indicator"></div>
          <h3 className="service-status-card-title">
            Account Core Service
          </h3>
        </div>
        <span className="service-status-card-environment">
          QA
        </span>
      </div>

      <div className="service-status-card-url">
        <p>
          https://api-gateway-qa.systemspecsg.com/services/account-core-service/management/health
        </p>
      </div>

      <div className="service-status-card-stats">
        <div className="service-status-card-uptime-container">
          <span className="service-status-card-uptime-value">
            100% Uptime
          </span>
          <span className="service-status-card-uptime-label">
            API
          </span>
        </div>
        <div className="service-status-card-progress-bar-container">
          <div className="service-status-card-progress-bar"></div>
        </div>

        <div className="service-status-card-stats-grid">
          <div className="service-status-card-stat-item service-status-card-stat-up">
            <div className="service-status-card-stat-value">
              144
            </div>
            <div className="service-status-card-stat-label">
              Up
            </div>
          </div>
          <div className="service-status-card-stat-item service-status-card-stat-down">
            <div className="service-status-card-stat-value">
              0
            </div>
            <div className="service-status-card-stat-label">
              Down
            </div>
          </div>
          <div className="service-status-card-stat-item service-status-card-stat-errors">
            <div className="service-status-card-stat-value">
              0
            </div>
            <div className="service-status-card-stat-label">
              Errors
            </div>
          </div>
          <div className="service-status-card-stat-item service-status-card-stat-total">
            <div className="service-status-card-stat-value">
              144
            </div>
            <div className="service-status-card-stat-label">
              Total
            </div>
          </div>
          <div className="service-status-card-stat-item service-status-card-stat-avg-time">
            <div className="service-status-card-stat-value">
              216.86ms
            </div>
            <div className="service-status-card-stat-label">
              Avg Time
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceStatusCard;