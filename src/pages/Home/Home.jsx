import ServiceCard from "../../components/ServiceCard";
import Sidebar from "../../components/Sidebar";
import LogsPanel from "../../components/LogsPanel";
import UptimeChart from "../../components/UptimeChart";
import ErrorHistory from "../../components/ErrorHistory";

import "./home.css";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <main className="main-content">
      <Sidebar />

      <div className="home-main-container">
        <Header />
        <div className="dashboard-grid">
          <div className="services-grid">
            <ServiceCard
              name="pm-server"
              status="Running"
              health="Healthy"
              cpu={77}
              memory={62}
              uptime={100}
              downtime={0}
              controls={["Start", "Stop"]}
            />
            <ServiceCard
              name="database"
              status="Stopped"
              health="Unhealthy"
              cpu={32}
              memory={64}
              uptime={97}
              downtime={3}
              controls={["Start", "Restart"]}
            />
            <ServiceCard
              name="cache"
              status="Running"
              health="Healthy"
              cpu={63}
              memory={70}
              uptime={99}
              downtime={1}
              controls={["Start", "Stop"]}
            />
            <ServiceCard
              name="worker"
              status="Stopped"
              health="Stopped"
              cpu={99}
              memory={42}
              uptime={80}
              downtime={20}
              controls={["Start"]}
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
