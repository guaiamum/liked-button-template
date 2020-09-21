import React from "react";

// hasPressed ? "👍🏽" : "👎🏽"
const LikedButton = ({ count }) => {
  return (
    <button type="button">
      <span role="img"> Like </span> | {count}
    </button>
  );
};

export default LikedButton;
