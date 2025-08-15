import React, { useState } from "react";

export default function AddServiceModal({ isOpen, onClose }) {
  const [serviceData, setServiceData] = useState({
    name: "",
    type: "web",
    description: "",
    port: "",
    healthCheck: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New service data:", serviceData);
    // Add logic here to create the service
    onClose();
    setServiceData({ name: "", type: "web", description: "", port: "", healthCheck: true });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setServiceData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="modal-overlay"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="add-service-modal">
        <div className="modal-header">
          <h2>Add New Service</h2>
          <button className="close-modal-btn" onClick={onClose}>
            ✕
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="service-form">
          <div className="form-group">
            <label htmlFor="name">Service Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={serviceData.name}
              onChange={handleChange}
              placeholder="Enter service name"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="type">Service Type</label>
            <select
              id="type"
              name="type"
              value={serviceData.type}
              onChange={handleChange}
            >
              <option value="web">Web Service</option>
              <option value="database">Database</option>
              <option value="cache">Cache</option>
              <option value="worker">Worker</option>
              <option value="api">API</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={serviceData.description}
              onChange={handleChange}
              placeholder="Enter service description"
              rows="3"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="port">Port</label>
            <input
              type="text"
              id="port"
              name="port"
              value={serviceData.port}
              onChange={handleChange}
              placeholder="e.g., 8080, 3306"
            />
          </div>
          
          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="healthCheck"
                checked={serviceData.healthCheck}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
              Enable Health Checks
            </label>
          </div>
          
          <div className="form-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Add Service
            </button>
          </div>
        </form>
      </div>
    </>
  );
} 