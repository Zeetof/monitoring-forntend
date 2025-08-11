import React, { useState } from "react";
import AddServiceModal from "./AddServiceModal";

export default function Topbar() {
  const [isAddServiceModalOpen, setIsAddServiceModalOpen] = useState(false);

  const openAddServiceModal = () => {
    setIsAddServiceModalOpen(true);
  };

  const closeAddServiceModal = () => {
    setIsAddServiceModalOpen(false);
  };

  const exportLogsToCSV = () => {
    // Sample service data - replace with actual data from your services
    const servicesData = [
      {
        serviceName: "pm-server",
        status: "Running",
        uptime: "100%",
        downtime: "0%",
        uptimeTimestamp: "2024-01-15 10:30:00",
        downtimeTimestamp: "N/A"
      },
      {
        serviceName: "database",
        status: "Stopped",
        uptime: "97%",
        downtime: "3%",
        uptimeTimestamp: "2024-01-15 09:45:00",
        downtimeTimestamp: "2024-01-15 10:15:00"
      },
      {
        serviceName: "cache",
        status: "Running",
        uptime: "99%",
        downtime: "1%",
        uptimeTimestamp: "2024-01-15 10:00:00",
        downtimeTimestamp: "2024-01-15 10:05:00"
      },
      {
        serviceName: "worker",
        status: "Stopped",
        uptime: "80%",
        downtime: "20%",
        uptimeTimestamp: "2024-01-15 08:00:00",
        downtimeTimestamp: "2024-01-15 09:30:00"
      }
    ];

    // Create CSV content
    const csvHeaders = [
      "Service Name",
      "Status",
      "Uptime %",
      "Downtime %",
      "Uptime Timestamp",
      "Downtime Timestamp"
    ];

    const csvRows = servicesData.map(service => [
      service.serviceName,
      service.status,
      service.uptime,
      service.downtime,
      service.uptimeTimestamp,
      service.downtimeTimestamp
    ]);

    // Combine headers and rows
    const csvContent = [
      csvHeaders.join(","),
      ...csvRows.map(row => row.join(","))
    ].join("\n");

    // Create and trigger download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", `service-logs-${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      <div className="topbar">
        <input
          type="text"
          className="search"
          placeholder="Search"
        />
        <div className="actions">
          <button className="refresh">Refresh</button>
          <button onClick={openAddServiceModal}>+ Add Service</button>
          <button onClick={exportLogsToCSV}>⬇️ Export Log</button>
        </div>
      </div>
      
      <AddServiceModal 
        isOpen={isAddServiceModalOpen} 
        onClose={closeAddServiceModal} 
      />
    </>
  );
}