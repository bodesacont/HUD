import React from "react";
import "./MusicClock.css";

const MusicClock = () => (
  <div className="widget music-clock-widget">
    <div className="widget-title">Music and Time (clock) player</div>
    <div>Now Playing: Placeholder Song</div>
    <div>Current Time: 12:34 PM</div>
    <div>
      <button>Prev</button>
      <button>Play/Pause</button>
      <button>Next</button>
    </div>
  </div>
);

export default MusicClock;
