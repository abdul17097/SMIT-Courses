import React, { useEffect, useRef } from "react";

const InputField = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" className="border" ref={inputRef} />
      {/* <button onClick={handleFocus}>Focus Input</button> */}
    </div>
  );
};

export default InputField;
