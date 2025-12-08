import React, { useState } from "react";
import "./Dashboard.css";
function Dashboard() {
  const [Ai, setAi] = useState();
  function Aibutton(e)
  {

  }
  return (
    <div className="dashboard">
      <div className="Welcome">
        <h1>Welcome Amitabh Dey</h1>
        <input
          type="text"
          className="Search-Bar"
          placeholder="Search previous history"
        />
        <button className="AI Insights" onClick ={Aibutton}>AI Insights</button>
      </div>
      <div className = "Summary">
        <span>
          <p>AI Health Summary</p>
          <p>Powered by Gemini</p>
          <p>Based on recent logs </p>
        </span>
      </div>
      <div className = "Features">
      <div className = "f1">
        <p>Sleep Tracker
          </p>
          <span></span></div>
      <div className = "f2"><p>Moods</p>
      <span>
        </span></div>
      <div className="f3"><p>Steps</p>
      <span>
        </span></div>
        </div>
    </div>
  );
}

export default Dashboard;
