import { useState } from "react";

export const useToogle = (intialValue = false) => {
  const [toggle, setToggle] = useState(intialValue);
  const toogleValue = () => setToggle(!toggle);

  return { toggle, toogleValue };
};
