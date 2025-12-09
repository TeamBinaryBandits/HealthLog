import React, { useState } from "react";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Dashboard from "./Dashboard.jsx";
import InsightsPage from "./InsightsPage.jsx";
import ProfilePage from "./ProfilePage.jsx";
import UploadPage from "./UploadPage.jsx";
function App() {
  const [page, setPage] = useState("login");

  return (
    <div>
      {page === "login" && <Login setPage={setPage} />}
      {page === "signup" && <Signup setPage={setPage} />}
      {page === "dashboard" && <Dashboard setPage={setPage} />}
      {page === "insights" && <InsightsPage setPage={setPage} />}
      {page === "profile" && <ProfilePage setPage={setPage} />}
      {page === "upload" && <UploadPage setPage={setPage} />}

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("signup")}>Signup</button>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("insights")}>Insights</button>
        <button onClick={() => setPage("profile")}>Profile</button>
        <button onClick={() => setPage("upload")}>Upload</button>
      </div>
    </div>
  );
}

export default App;
