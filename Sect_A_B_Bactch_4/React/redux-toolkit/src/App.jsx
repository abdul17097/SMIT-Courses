import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment } from "./store/slices/counter";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div className="border border-gray-300">
      <button onClick={() => dispatch(increment())}>count is {count}</button>
    </div>
  );
}

export default App;
