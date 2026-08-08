import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment } from "./store/slices/counter";
import Cart from "./components/Cart";
import { deleteFromCart } from "./store/slices/cart";

function App() {
  const dispatch = useDispatch();
  const { counter, cart } = useSelector((state) => state);
  console.log(cart);

  return (
    <>
      {/* <div className="border border-gray-300">
        <button onClick={() => dispatch(increment())}>count is {count}</button>
      </div>
      <div className="flex flex-col gap-3">
        <button
          // onClick={() => dispatch(increment())}
          className="border p-3 rounded-lg cursor-pointer"
        >
          count is {counter.value}
        </button>
      </div> */}
      <Cart />
      <div className="">
        <h1 className="text-2xl font-bold">Cart Items</h1>
        {cart.cart.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <ul>
            {cart.cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <button
                  onClick={() => dispatch(deleteFromCart({ id: item.id }))}
                  className="border p-2 rounded-lg cursor-pointer ml-2"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;

const { number: value1 } = 19;
const { number: value2 } = 20;
