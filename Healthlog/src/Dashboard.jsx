import React, { useState } from "react";
import "./Dashboard.css";
export default function Dashboard({setPage}) {
  const [Ai, setAi] = useState();
  const [srch, setsrch] = useState();
  const [fone, setfone] = useState();
  const [ftwo, setftwo] = useState();
  const [fthree, setfthree] = useState();
  function Aibutton(e)

  {

  }
  function Search(e)
  {

  }
  function SleepTracker(e)
  {

  }
  function MoodTracker(e)
  {

  }
  function StepCount(e)
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


