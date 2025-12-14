import {Routes, Route} from "react-router-dom";
import React, { useState } from "react";
import Login from "./Login.jsx";

import Signup from "./Signup.jsx";
import Dashboard from "./Dashboard.jsx";
import InsightsPage from "./InsightsPage.jsx";
import ProfilePage from "./ProfilePage.jsx";
import UploadPage from "./UploadPage.jsx";
import ToggleDark from "./ToggleDark.jsx"
function App() {
  const [page, setPage] = useState("login");

  return (
    <>
    <div>
     <Routes>
      <Route
      path = "./Signup.jsx"
      element ={
          <Signup/>
      }/>
        <Route
      path = "./Login.jsx"
      element ={

          <Login/>
      
      }/>
      <Route
       path="./Dashboard.jsx"
      element ={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
    
      }/>
      <Route 
      path="./ProfilePage.jsx"
      element = {
        <ProtectedRoute>
          <ProfilePage/>
        </ProtectedRoute>
      }/>
      <Route 
      path ="./InsightsPage.jsx"
      element ={
        <ProtectedRoute>
          <InsightsPage/>
        </ProtectedRoute>
      }/>
      <Route
      path = "./UploadPage.jsx"
      element = {
        <ProtectedRoute>
          <UploadPage/>
        </ProtectedRoute>
      }/>
      </Routes>
      </div>
      <ToggleDark/>
    </>
  );
}

export default App;
