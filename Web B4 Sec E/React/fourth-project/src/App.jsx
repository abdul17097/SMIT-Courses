import { useDispatch, useSelector } from "react-redux";
import { increment } from "./features/counterSlice";

const App = () => {
  const countObj = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="">
      <h1>hello world</h1>
      <p>Count: {countObj.count}</p>
      <button
        onClick={() => dispatch(increment())}
        className="border p-1 cursor-pointer"
      >
        Increment
      </button>
    </div>
  );
};

export default App;
