import { Welcome } from "./Welcome";

function App() {
  return (
    <>
      <h1 className="text-md font-[500] text-[#19a50c] w-[100px] border-2 border-amber-600">
        hello world
      </h1>
      <p>how</p>
      <Welcome />
      <div className="border h-10 bg-green-500 md:bg-amber-800 lg:bg-pink-800 xl:bg-blue-700 2xl:bg-amber-400"></div>
    </>
  );
}

export default App;
