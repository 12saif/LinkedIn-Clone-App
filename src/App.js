import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
