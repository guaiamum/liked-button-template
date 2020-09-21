import React from "react";
import "./styles.css";
import LikedButton from "./LikedButton";

export default function App() {
  return (
    <div className="App">
      <h1>Like button!</h1>
      <p>
        Implement a button that has a liked state display the number of likes
        passed in by props plus the current user like.
      </p>
      <p>
        This button should have a not liked state too, displaying only the likes
        count passed in by props
      </p>

      <LikedButton count={89} />
    </div>
  );
}
