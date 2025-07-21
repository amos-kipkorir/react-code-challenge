// src/App.js
import React from 'react';
import GoalDashboard from './components/GoalDashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Smart Goal Planner</h1>
        <p>Track and achieve your financial goals</p>
      </header>
      <main>
        {/* <GoalDashboard /> */}
        <p>Dashboard placeholder</p>
      </main>
      <footer>
        <p>© 2025 FinTech Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
