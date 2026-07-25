import React, { memo } from "react";

const ChildComponent = memo(({ handleCount }) => {
  console.log("Child Rendered!");

  return <div>ChildComponent</div>;
});

export default ChildComponent;
