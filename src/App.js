import React from "react";
import AppNav from "./components/AppNav";
import CalendarTodo from "./components/CalendarTodo";
import Weather from "./components/Weather";
import MusicClock from "./components/MusicClock";
import "./styles.css";

function App() {
  return (
    <div className="hud-background">
      <AppNav />
      <div className="hud-layout">
        <CalendarTodo />
        <div className="hud-main-panels">
          <Weather />
          <MusicClock />
        </div>
      </div>
    </div>
  );
}

export default App;
