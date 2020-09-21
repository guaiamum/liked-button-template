import React from "react";
import "./styles.css";
import LikedButton from "./LikedButton";

export default function App() {
  return (
    <div className="App">
      <h1>Like button!</h1>
      <p>
        Implement the behaviour of the GIF on <code>./LikedButton.js</code>
      </p>
      <img
        src="/liked-button.gif"
        alt="Button being clicked"
        id="button-behaviour"
      />

      <LikedButton count={89} />
    </div>
  );
}
