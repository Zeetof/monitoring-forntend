import React, { useState } from "react";

export default function Sidebar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [environment, setEnvironment] = useState("QA");
  const [activeServiceFilter, setActiveServiceFilter] = useState("All");

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // You can add logic here to actually change the theme
    document.body.classList.toggle('light-mode');
  };

  const handleClose = () => {
    // Add logic here for closing the sidebar or application
    console.log('Close button clicked');
  };

  const handleEnvironmentChange = (e) => {
    setEnvironment(e.target.value);
  };

  const handleServiceFilterClick = (filter) => {
    setActiveServiceFilter(filter);
    // Add logic here for filtering services
    console.log('Service filter clicked:', filter);
  };

  const getEnvironmentColor = (env) => {
    return env === "QA" ? "env-qa" : "env-demo";
  };

  const getServiceFilterClass = (filter) => {
    if (filter === activeServiceFilter) {
      return `filter-item active filter-${filter.toLowerCase()}`;
    }
    return `filter-item filter-${filter.toLowerCase()}`;
  };

  return (
    <aside className="sidebar">
      {/* Logo Section */}
      <div className="logo-section">
        <div className="logo">
          <div className="logo-text">
            <span className="logo-title">Service Monitor</span>
            <span className="logo-subtitle">Dashboard v2.0</span>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="nav-section">
        <div className="section-header">
          <span className="section-title">Navigation</span>
        </div>
        <nav>
          <ul>
            <li className="nav-item active">
              <span className="nav-text">Dashboard</span>
            </li>
            <li className="nav-item">
              <span className="nav-text">Settings</span>
            </li>
            <li className="nav-item">
              <span className="nav-text">About</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Environment Section */}
      <div className="environment-section">
        <div className="section-header">
          <span className="section-title">Environment</span>
        </div>
        <div className="environment-selector">
          <select 
            value={environment} 
            onChange={handleEnvironmentChange}
            className={`env-dropdown ${getEnvironmentColor(environment)}`}
          >
            <option value="QA" className="env-qa">QA</option>
            <option value="Demo" className="env-demo">Demo</option>
          </select>
        </div>
      </div>

      {/* Services Filter Section */}
      <div className="services-section">
        <div className="section-header">
          <span className="section-title">Services</span>
        </div>
        <div className="services-filter">
          <div 
            className={getServiceFilterClass('All')}
            onClick={() => handleServiceFilterClick('All')}
          >
            <span>All</span>
            <span className="filter-count">4</span>
          </div>
          <div 
            className={getServiceFilterClass('Running')}
            onClick={() => handleServiceFilterClick('Running')}
          >
            <span>Running</span>
            <span className="filter-count">2</span>
          </div>
          <div 
            className={getServiceFilterClass('Stopped')}
            onClick={() => handleServiceFilterClick('Stopped')}
          >
            <span>Stopped</span>
            <span className="filter-count">2</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        {/* Theme Toggle */}
        <div className="theme-toggle">
          <div className="toggle-info">
            <span className="toggle-text">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={!isDarkMode}
              onChange={toggleTheme}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        {/* Close Button */}
        <div className="close-button-container">
          <button onClick={handleClose} className="close-btn">
            <span>Close</span>
          </button>
        </div>
      </div>
    </aside>
  );
}