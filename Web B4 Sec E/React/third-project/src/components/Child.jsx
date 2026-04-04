import React from "react";

const Child = React.memo(() => {
  console.log("Re-Render");

  return <div>Child Component</div>;
});

export default Child;
