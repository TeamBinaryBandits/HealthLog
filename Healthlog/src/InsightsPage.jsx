import './InsightsPage.css';
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "/firebase.js"
export default function InsightsPage()
{
const [logs, setlogs] = useState([]);

useEffect(()=> {
    const loadData = async () =>
        {
            const snap = await getDocs(collection(db, "healthlogs"));
            const arr =[];

          snap.forEach((doc)=> 
        {
            arr.push({
                day: new Date(doc.Date().uploadAt?.seconds * 1000)
                .toLocaleDateString("en-us", {weekday:"short"}),
                value: 1
            });
        });
        setlogs(arr)
    };
    loadData();

   }, []);

  return (
    <div className="container">
      <h2>Insights</h2>


      <div className="ai">
        <h4>AI Suggestion</h4>
        <p>Upload your daily logs consistently to maintain your health record!</p>
      </div>
      </div>
  );
}
