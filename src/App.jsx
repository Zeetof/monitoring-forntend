import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ServiceCard from "./components/ServiceCard";
import LogsPanel from "./components/LogsPanel";
import UptimeChart from "./components/UptimeChart";
import ErrorHistory from "./components/ErrorHistory";
import "./index.css";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <>
      <Home />
    </>
  );
}
