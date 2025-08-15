import React, { useEffect } from "react";
import ErrorHistory from "../../components/ErrorHistory";
import Header from "../../components/Header/Header";
import LogsPanel from "../../components/LogsPanel";
import ServiceCard from "../../components/ServiceCard";
import Sidebar from "../../components/Sidebar";
import UptimeChart from "../../components/UptimeChart";

import "./home.css";

const Home = () => {
  useEffect(() => {
    const names = ["database", "pm-server", "cache", "account-core-service"];
    const syncHeights = () => {
      const cards = names
        .map((n) => document.querySelector(`.service-card[data-service-name="${n}"]`))
        .filter(Boolean);
      if (cards.length === 0) return;
      // Reset heights to natural for accurate measurement
      cards.forEach((el) => (el.style.height = "auto"));
      const maxHeight = Math.max(...cards.map((el) => Math.round(el.getBoundingClientRect().height)));
      cards.forEach((el) => (el.style.height = `${maxHeight}px`));
    };

    // Initial sync after mount and when assets/fonts settle
    const timeoutId = setTimeout(syncHeights, 100);
    window.addEventListener('resize', syncHeights);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', syncHeights);
    };
  }, []);
  return (
    <main className="main-content">
      <Sidebar />
      <div className="home-main-container">
        <Header />
        <div className="dashboard-grid">
          <div className="services-grid">
            <ServiceCard
              id={1}
              name="pm-server"
              environment="PROD"
              status="Running"
              healthEndpoint="https://api.systemspecsg.com/services/pm-server/management/health"
              cpu={77}
              memory={62}
              uptime={100}
              controls={["Start", "Stop"]}
              metrics={{
                up: 1440,
                down: 0,
                errors: 2,
                total: 1440,
                averageTimeMs: "124.5ms"
              }}
            />
            <ServiceCard
              id={2}
              name="database"
              environment="PROD"
              status="Stopped"
              healthEndpoint="https://api.systemspecsg.com/services/database/management/health"
              cpu={32}
              memory={64}
              uptime={97}
              controls={["Start", "Restart"]}
              metrics={{
                up: 1395,
                down: 45,
                errors: 12,
                total: 1440,
                averageTimeMs: "87.2ms"
              }}
            />
            <ServiceCard
              id={3}
              name="cache"
              environment="PROD"
              status="Running"
              healthEndpoint="https://api.systemspecsg.com/services/cache/management/health"
              cpu={63}
              memory={70}
              uptime={99}
              controls={["Start", "Stop"]}
              metrics={{
                up: 1425,
                down: 15,
                errors: 5,
                total: 1440,
                averageTimeMs: "45.8ms"
              }}
            />
            <ServiceCard
              id={4}
              name="worker"
              environment="PROD"
              status="Stopped"
              healthEndpoint="https://api.systemspecsg.com/services/worker/management/health"
              cpu={99}
              memory={42}
              uptime={80}
              controls={["Start"]}
              metrics={{
                up: 1152,
                down: 288,
                errors: 45,
                total: 1440,
                averageTimeMs: "216.8ms"
              }}
            />
            <ServiceCard
              id={5}
              name="Account Core Service"
              environment="QA"
              healthEndpoint="https://api-gateway-qa.systemspecsg.com/services/account-core-service/management/health"
              status="Running"
              health="Healthy"
              cpu={85}
              memory={75}
              uptime={100}
              downtime={0}
              controls={["Start", "Stop"]}
              metrics={{
                up: 144,
                down: 0,
                errors: 0,
                total: 144,
                averageTimeMs: "217.01ms"
              }}
            />
          </div>
          <div className="right-panel">
            <LogsPanel />
            <UptimeChart />
            <ErrorHistory />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
