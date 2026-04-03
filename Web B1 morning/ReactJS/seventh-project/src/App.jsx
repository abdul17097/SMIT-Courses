import { useCallback, useMemo, useState } from "react";
import "./App.css";
import DashboardLayout from "./components/DashboardLayout";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Geography from "./pages/Geography";
import Conversation from "./pages/Conversation";
import Deals from "./pages/Deals";
import Exports from "./pages/Exports";
import Settings from "./pages/Settings";
import UserDetail from "./pages/UserDetail";
import NotFound from "./pages/NotFound";
import Child from "./components/Child";
import Counter from "./components/Counter";
import InputField from "./components/InputField";
import DropZone from "./components/DropZone";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("khalid");

  const updatedCount = useMemo(() => {
    console.log("UpdatedCount");

    return count * 2;
  }, [count]);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, [name]);

  return (
    <div className="">
      <DropZone />
      {/* <InputField /> */}
      {/* <Counter /> */}
      {/* <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <button>Double Count {updatedCount}</button> */}

      {/* <Child name={name} /> */}
      {/* <Child handleClick={handleClick} /> */}
      <br />
      {/* <button onClick={() => setName("Alice")}>Change Name {name}</button> */}
      {/* <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/conversation" element={<Conversation />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/exports" element={<Exports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/user-details/:id" element={<UserDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </div>
  );
}

export default App;
