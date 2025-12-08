import React, { useState } from "react";

function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="Welcome">
        <h1>Welcome Amitabh Dey</h1>
        <input
          type="text"
          className="Search-Bar"
          placeholder="Search previous history"
        />
      </div>
    </div>
  );
}

export default Dashboard;
