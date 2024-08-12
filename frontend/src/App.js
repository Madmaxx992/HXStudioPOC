// App.js
import React from "react";
import Navbar from "./components/Navbar";
import AdminDashboardContainer from "./components/AdminDashboard";
function App() {
  return (
    <div className="App">
      <AdminDashboardContainer>
        <Navbar />
      </AdminDashboardContainer>
    </div>
  );
}

export default App;
