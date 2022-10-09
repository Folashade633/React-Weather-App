import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Folashade Joachim and is{" "}
          <a
            href="https://github.com/Folashade633/React-Weather-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://charming-concha-a92161.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
