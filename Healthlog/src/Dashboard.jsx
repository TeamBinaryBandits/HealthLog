import React, { useState } from "react";

function Dashboard() {
  const [Ai, setAi] = useState();
  function Aibutton(e)
  {

  }
  return (
    <div className="Dashboard">
      <div className="Welcome">
        <h1>Welcome Amitabh Dey</h1>
        <input
          type="text"
          className="Search-Bar"
          placeholder="Search previous history"
        />
        <button className="AI Insights" onClick ={Aibutton}>AI Insights</button>
      </div>
    </div>
  );
}

export default Dashboard;
