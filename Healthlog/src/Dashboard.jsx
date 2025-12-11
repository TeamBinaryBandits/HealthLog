import { useNavigate } from "react-router-dom";
import { auth } from "/firebase.js";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate("/Login");
  };

  return (
    <div className="container">
      <header className="header">
        <h2>HealthLog Dashboard</h2>
        <button className="logout" onClick={handleLogout}>Logout</button>
      </header>

      <div className="grid">
        <div
          className="upload"
          onClick={() => navigate("/UploadPage")}
        >
          <h3>Upload Report</h3>
          <p>Upload medical reports to analyze</p>
        </div>

        <div
          className="insight"
          onClick={() => navigate("/InsightsPage")}
        >
          <h3>View Insights</h3>
          <p>Check trends, statistics, and predictions</p>
        </div>

        <div className="Profile">
          <h3>Your Profile</h3>
          <p>Manage your basic health details</p>
        </div>
      </div>
    </div>
  );
}



