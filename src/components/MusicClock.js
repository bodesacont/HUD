import React, { useState } from "react";
import "./MusicClock.css";

function MusicClock() {
  const [status, setStatus] = useState("paused");

  function handlePlayPause() {
    // Try Media Session API
    if ("mediaSession" in navigator) {
      if (status === "playing") {
        navigator.mediaSession.playbackState = "paused";
      } else {
        navigator.mediaSession.playbackState = "playing";
      }
      setStatus(status === "playing" ? "paused" : "playing");
    } else {
      setStatus(status === "playing" ? "paused" : "playing");
      alert("Media Session API not supported. This button will just toggle icon.");
    }
  }

  const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="widget music-clock-widget">
      <div className="widget-title">Music & Clock</div>
      <div>Current Time: {now}</div>
      <div>
        <button onClick={handlePlayPause}>
          {status === "playing" ? "Pause" : "Play"}
        </button>
      </div>
      <div style={{ fontSize: "0.8em", color: "#888", marginTop: 8 }}>
        Controls music on this device (if supported).
      </div>
    </div>
  );
}

export default MusicClock;
