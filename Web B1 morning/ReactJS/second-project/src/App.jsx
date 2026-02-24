import "./App.css";
import DisplayName from "./components/DisplayName";

function App() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <DisplayName name={"John Doe"} />
      <DisplayName />
      <DisplayName />
      <DisplayName />
      <DisplayName name={"Bob Johnson"} />
    </div>
  );
}

export default App;
