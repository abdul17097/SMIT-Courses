// import React from "react";

// const Child = React.memo(({ name }) => {
//   console.log("Child Component");

//   return <div>Hello, {name}!</div>;
// });

// export default Child;
import React from "react";

const Child = React.memo(({ handleClick }) => {
  console.log("Child Component");

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
});

export default Child;
