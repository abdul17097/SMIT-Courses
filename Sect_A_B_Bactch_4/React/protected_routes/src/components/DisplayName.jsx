import React from "react";

const DisplayName = React.memo(() => {
  console.log("Hello world!");

  return <div>Hello world</div>;
});

export default DisplayName;
