import { useDispatch, useSelector } from "react-redux";
import { increment } from "../features/counterSlice";

const Counter = () => {
  const countValue = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(countValue);

  return <div>
    <h2>Counter: {countValue.value}</h2>
    <button onClick={()=> dispatch(increment())}>Increment</button>
  </div>;
};

export default Counter;
