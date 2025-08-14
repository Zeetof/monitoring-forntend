import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchServices, updateServiceStatus } from '../features/monitoring/monitoringSlice';
import './MonitoringDashboard.css';

const MonitoringDashboard = () => {
  const dispatch = useDispatch();
  const { services, loading, error } = useSelector((state) => state.monitoring);

  useEffect(() => {
    // Fetch services when component mounts
    dispatch(fetchServices());
  }, [dispatch]);

  const handleServiceAction = (serviceId, action) => {
    dispatch(updateServiceStatus({ serviceId, action }));
  };

  if (loading) {
    return <div className="loading">Loading services...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="monitoring-dashboard">
      <h2>Monitoring Dashboard</h2>
      {/* <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h3>{service.name}</h3>
            <p>Status: {service.status}</p>
            <p>Health: {service.health}</p>
            <p>CPU: {service.cpu}%</p>
            <p>Memory: {service.memory}%</p>
            <div className="service-actions">
              {service.controls && service.controls.map((control) => (
                <button 
                  key={control}
                  onClick={() => handleServiceAction(service.id, control.toLowerCase())}
                >
                  {control}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default MonitoringDashboard;