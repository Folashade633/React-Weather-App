import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lagos" />
        <footer>
          Open-sourced on{" "}
          <a
            href="https://github.com/Folashade633/React-Weather-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and Hosted on{" "}
          <a
            href="https://charming-concha-a92161.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
