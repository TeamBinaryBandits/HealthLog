import './InsightsPage.css';
import React, {useState} from "react";
export default function InsightsPage()
{
const [healthdata, sethealthdata] = useState(null);
const [insight, setinsights] = useState([]);
const mockData = {
    mood: [3, 4, 5, 2, 3, 4, 2],
    sleephours: [6, 7.5, 5, 7, 8, 6, 4],
    steps: [4000, 5000, 8000, 7500, 3000, 8000, 4600]
};
const getAvg = (arr)=>
{

return(arr.reduce((a,b) => a + b, 0)/arr.length).toFixed(1);
}
const getTrend =(e) =>
{

}
const getSleepquality = (e) =>
{

}
const getInsights = (data) =>
{
    
}
}
